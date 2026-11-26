import { Lead, LeadStatus, LeadType, Prisma } from '@prisma/client'

import prisma from '@/lib/prisma'

export type LeadPayload = {
  title?: string
  fullName?: string
  phone?: string
  email?: string
  message?: string
}

export type NewLead = {
  type: LeadType
  payload: LeadPayload
  source?: string
  idempotencyKey: string
}

/** production | preview | development — stored with each lead to tell test leads apart. */
export const currentEnv = (): string => process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'

/**
 * Saves a lead. A repeated submit with the same idempotency key returns the stored lead
 * instead of creating a second one.
 */
export async function saveLead(input: NewLead): Promise<{ lead: Lead; duplicate: boolean }> {
  try {
    const lead = await prisma.lead.create({
      data: {
        type: input.type,
        payload: input.payload,
        source: input.source || null,
        env: currentEnv(),
        idempotencyKey: input.idempotencyKey,
      },
    })
    return { lead, duplicate: false }
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      const lead = await prisma.lead.findUniqueOrThrow({ where: { idempotencyKey: input.idempotencyKey } })
      return { lead, duplicate: true }
    }
    throw err
  }
}

export type DeliveryResult = {
  telegramDeliveredAt: Date | null
  emailDeliveredAt: Date | null
  errors: string[]
}

/** Records one delivery attempt: per-channel timestamps, status, attempt count, last error. */
export async function recordDelivery(id: number, result: DeliveryResult): Promise<Lead> {
  const delivered = result.telegramDeliveredAt !== null && result.emailDeliveredAt !== null
  return prisma.lead.update({
    where: { id },
    data: {
      telegramDeliveredAt: result.telegramDeliveredAt,
      emailDeliveredAt: result.emailDeliveredAt,
      status: delivered ? 'delivered' : 'failed',
      attempts: { increment: 1 },
      lastError: result.errors.length ? result.errors.join('; ').slice(0, 1000) : null,
    },
  })
}

export const LEAD_ENVS = ['production', 'preview', 'development'] as const

/** Leads for the admin list, newest first. `env: 'all'` shows test leads too. */
export async function listLeads(filter: { env: string; status?: LeadStatus; take?: number }): Promise<Lead[]> {
  return prisma.lead.findMany({
    where: {
      ...(filter.env !== 'all' ? { env: filter.env } : {}),
      ...(filter.status ? { status: filter.status } : {}),
    },
    orderBy: { createdAt: 'desc' },
    take: filter.take ?? 100,
  })
}

export async function getLead(id: number): Promise<Lead | null> {
  return prisma.lead.findUnique({ where: { id } })
}

/**
 * Undelivered leads of the current environment for the scheduled retry: not yet over the attempt
 * limit, and older than `minAgeMs` so a lead whose first delivery is still running is not picked up.
 */
export async function findLeadsToRetry(opts: { maxAttempts: number; minAgeMs: number; take: number }): Promise<Lead[]> {
  return prisma.lead.findMany({
    where: {
      env: currentEnv(),
      status: { in: ['new', 'failed'] },
      attempts: { lt: opts.maxAttempts },
      createdAt: { lt: new Date(Date.now() - opts.minAgeMs) },
    },
    orderBy: { createdAt: 'asc' },
    take: opts.take,
  })
}
