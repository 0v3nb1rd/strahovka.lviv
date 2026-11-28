import type { Lead } from '@/db/schema'

import { baseUrl } from '@/utils'
import { findLeadsToRetry } from '@/lib/leads'
import { deliverLead, sendAdminAlert } from '@/lib/leads/deliver'

// Attempts include the first delivery at submit time. The Hobby plan runs Vercel Cron once a day,
// so 3 attempts = submit + two daily retries before the admin gets an alert.
export const MAX_AUTO_ATTEMPTS = 3
const BATCH = 10
const MIN_AGE_MS = 2 * 60 * 1000

export type RetryReport = { checked: number; delivered: number; stillFailed: number; alerted: number }

/** Retries undelivered leads of the current environment; alerts the admin when a lead runs out of attempts. */
export async function retryUndeliveredLeads(): Promise<RetryReport> {
  const leads = await findLeadsToRetry({ maxAttempts: MAX_AUTO_ATTEMPTS, minAgeMs: MIN_AGE_MS, take: BATCH })
  const results = await Promise.allSettled(leads.map((lead) => deliverLead(lead)))

  const report: RetryReport = { checked: leads.length, delivered: 0, stillFailed: 0, alerted: 0 }
  const exhausted: Lead[] = []
  results.forEach((r, i) => {
    const lead = r.status === 'fulfilled' ? r.value : leads[i]
    if (lead.status === 'delivered') return void report.delivered++
    report.stillFailed++
    if (lead.attempts >= MAX_AUTO_ATTEMPTS) exhausted.push(lead)
  })

  if (exhausted.length) {
    const ids = exhausted.map((l) => `#${l.id}`).join(', ')
    const ok = await sendAdminAlert(
      `Заявки не доставлено після ${MAX_AUTO_ATTEMPTS} спроб: ${ids}`,
      [
        ...exhausted.map((l) => `#${l.id}: ${l.lastError ?? 'невідома помилка'}`),
        `Перегляд і повтор: ${baseUrl}/adm/leads/?status=failed`,
      ].join('\n')
    )
    if (ok) report.alerted = exhausted.length
  }
  return report
}
