import { Lead, LeadType, Prisma } from '@prisma/client'

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
