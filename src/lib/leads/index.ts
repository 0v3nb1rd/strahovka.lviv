import { and, asc, desc, eq, inArray, lt, sql, type SQL } from 'drizzle-orm'

import { db } from '@/lib/db'
import { lead as leadTable, type Lead, type LeadStatus, type LeadType } from '@/db/schema'

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
  const [created] = await db
    .insert(leadTable)
    .values({
      type: input.type,
      payload: input.payload,
      source: input.source || null,
      env: currentEnv(),
      idempotencyKey: input.idempotencyKey,
    })
    .onConflictDoNothing({ target: leadTable.idempotencyKey })
    .returning()
  if (created) return { lead: created, duplicate: false }

  const [existing] = await db.select().from(leadTable).where(eq(leadTable.idempotencyKey, input.idempotencyKey))
  if (!existing) throw new Error('Lead insert conflicted but no lead with this idempotency key was found')
  return { lead: existing, duplicate: true }
}

export type DeliveryResult = {
  telegramDeliveredAt: Date | null
  emailDeliveredAt: Date | null
  errors: string[]
}

/** Records one delivery attempt: per-channel timestamps, status, attempt count, last error. */
export async function recordDelivery(id: number, result: DeliveryResult): Promise<Lead> {
  const delivered = result.telegramDeliveredAt !== null && result.emailDeliveredAt !== null
  const [updated] = await db
    .update(leadTable)
    .set({
      telegramDeliveredAt: result.telegramDeliveredAt,
      emailDeliveredAt: result.emailDeliveredAt,
      status: delivered ? 'delivered' : 'failed',
      attempts: sql`${leadTable.attempts} + 1`,
      lastError: result.errors.length ? result.errors.join('; ').slice(0, 1000) : null,
    })
    .where(eq(leadTable.id, id))
    .returning()
  if (!updated) throw new Error(`Lead ${id} not found`)
  return updated
}

export const LEAD_ENVS = ['production', 'preview', 'development'] as const

/** Leads for the admin list, newest first. `env: 'all'` shows test leads too. */
export async function listLeads(filter: { env: string; status?: LeadStatus; take?: number }): Promise<Lead[]> {
  const conditions: SQL[] = []
  if (filter.env !== 'all') conditions.push(eq(leadTable.env, filter.env))
  if (filter.status) conditions.push(eq(leadTable.status, filter.status))
  return db
    .select()
    .from(leadTable)
    .where(and(...conditions))
    .orderBy(desc(leadTable.createdAt))
    .limit(filter.take ?? 100)
}

export async function getLead(id: number): Promise<Lead | null> {
  const [row] = await db.select().from(leadTable).where(eq(leadTable.id, id))
  return row ?? null
}

/**
 * Undelivered leads of the current environment for the scheduled retry: not yet over the attempt
 * limit, and older than `minAgeMs` so a lead whose first delivery is still running is not picked up.
 */
export async function findLeadsToRetry(opts: { maxAttempts: number; minAgeMs: number; take: number }): Promise<Lead[]> {
  return db
    .select()
    .from(leadTable)
    .where(
      and(
        eq(leadTable.env, currentEnv()),
        inArray(leadTable.status, ['new', 'failed']),
        lt(leadTable.attempts, opts.maxAttempts),
        lt(leadTable.createdAt, new Date(Date.now() - opts.minAgeMs))
      )
    )
    .orderBy(asc(leadTable.createdAt))
    .limit(opts.take)
}
