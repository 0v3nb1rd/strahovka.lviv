import type { Lead } from '@/db/schema'

import { sendAgencyEmail } from '@/lib/mailer/mailer'
import { sendTelegramMessage } from '@/lib/telegram'
import { DeliveryResult, LeadPayload, recordDelivery } from '@/lib/leads'

// User input goes into Telegram (parse_mode HTML) and the email body: escape it.
export const escapeHtml = (s: string | undefined | null): string =>
  (s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const LABELS: Record<Lead['type'], string> = {
  service: 'Заявка на послугу',
  contacts: 'Контакт форма',
  subscribe: 'Форма підписки',
}

type Row = [label: string, value: string | undefined, href?: string]

function rows(p: LeadPayload): Row[] {
  const list: Row[] = [
    ['послуга', p.title],
    ["ім'я", p.fullName],
    ['тел', p.phone, p.phone ? `tel:${p.phone}` : undefined],
    ['email', p.email, p.email ? `mailto:${p.email}` : undefined],
    ['текст', p.message],
  ]
  return list.filter(([, value]) => value)
}

function formatTelegram(lead: Lead, p: LeadPayload): string {
  const env = lead.env === 'production' ? '' : ` [${escapeHtml(lead.env)}]`
  const lines = rows(p).map(([label, value]) => `<i>${label}</i>: ${escapeHtml(value)}`)
  return [`<b>${LABELS[lead.type]}</b> #${lead.id}${env}`, ...lines].join('\n')
}

function formatEmail(lead: Lead, p: LeadPayload): { subject: string; html: string } {
  const env = lead.env === 'production' ? '' : ` [${lead.env}]`
  const subject = `${LABELS[lead.type]}${p.title ? ': ' + p.title : ''} #${lead.id}${env}`
  const body = rows(p)
    .map(([label, value, href]) => {
      const v = escapeHtml(value)
      return `<p><i>${label}</i>: ${href ? `<a href="${escapeHtml(href)}">${v}</a>` : v}</p>`
    })
    .join('')
  return { subject, html: `<h2>${escapeHtml(subject)}</h2><div style="font-size:18px;">${body}</div>` }
}

/**
 * Sends the lead to the channels it has not reached yet (Telegram, email) and records the result.
 * Channels run in parallel and independently: one failure never hides the other's success.
 */
export async function deliverLead(lead: Lead): Promise<Lead> {
  const p = lead.payload as LeadPayload
  const { subject, html } = formatEmail(lead, p)

  const [tg, mail] = await Promise.allSettled([
    lead.telegramDeliveredAt ? Promise.resolve() : sendTelegramMessage(formatTelegram(lead, p)),
    lead.emailDeliveredAt ? Promise.resolve() : sendAgencyEmail(subject, html),
  ])

  const now = new Date()
  const result: DeliveryResult = {
    telegramDeliveredAt: lead.telegramDeliveredAt ?? (tg.status === 'fulfilled' ? now : null),
    emailDeliveredAt: lead.emailDeliveredAt ?? (mail.status === 'fulfilled' ? now : null),
    errors: [],
  }
  if (tg.status === 'rejected') result.errors.push(`telegram: ${errorMessage(tg.reason)}`)
  if (mail.status === 'rejected') result.errors.push(`email: ${errorMessage(mail.reason)}`)

  return recordDelivery(lead.id, result)
}

const errorMessage = (e: unknown) => (e instanceof Error ? e.message : String(e))

/**
 * Alert for the agency about leads that could not be delivered. Goes to both channels: whichever
 * still works carries it. Contains lead ids and errors only, no client data.
 * Returns true if at least one channel accepted it.
 */
export async function sendAdminAlert(subject: string, text: string): Promise<boolean> {
  const results = await Promise.allSettled([
    sendTelegramMessage(`<b>⚠️ ${escapeHtml(subject)}</b>\n${escapeHtml(text)}`),
    sendAgencyEmail(`⚠️ ${subject}`, `<h2>${escapeHtml(subject)}</h2><pre>${escapeHtml(text)}</pre>`),
  ])
  const ok = results.some((r) => r.status === 'fulfilled')
  if (!ok) console.error('[leads] admin alert not delivered by any channel')
  return ok
}
