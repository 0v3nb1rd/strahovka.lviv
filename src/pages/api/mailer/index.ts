import { NextApiRequest, NextApiResponse } from 'next'
import type { LeadType } from '@/db/schema'

import { saveLead } from '@/lib/leads'
import { deliverLead } from '@/lib/leads/deliver'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { isLeadAction, LeadAction, leadRequestSchemas } from '@/lib/validation/lead'

// Public endpoint for the site forms (Modal → form_service, ContactForm → form_contacts,
// CtaBlock → form_subscribe). Order matters: save the lead first, then deliver it, so a lead
// is never lost when Telegram or email fails. The client gets success as soon as it is saved.

const TYPE_BY_ACTION: Record<LeadAction, LeadType> = {
  form_service: 'service',
  form_contacts: 'contacts',
  form_subscribe: 'subscribe',
}

const clientIp = (req: NextApiRequest) =>
  (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() || req.socket.remoteAddress

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const action = req.body?.action
  if (!isLeadAction(action)) return res.status(400).json({ error: 'Invalid input' })

  // Honeypot filled: answer like a success so the bot does not adapt, store nothing.
  if (typeof req.body.website === 'string' && req.body.website !== '') return res.status(200).json({ ok: true })

  let data
  try {
    data = await leadRequestSchemas[action].validate(req.body, { stripUnknown: true, abortEarly: true })
  } catch {
    return res.status(400).json({ error: 'Invalid input' })
  }

  try {
    if (!(await verifyRecaptcha(data.captcha, clientIp(req)))) {
      return res.status(400).json({ error: 'Captcha failed' })
    }
  } catch (err) {
    console.error('[mailer] captcha check failed:', err instanceof Error ? err.message : err)
    return res.status(503).json({ error: 'Captcha unavailable' })
  }

  const { captcha, idempotencyKey, source, website, ...payload } = data
  let saved
  try {
    saved = await saveLead({ type: TYPE_BY_ACTION[action], payload, source, idempotencyKey })
  } catch (err) {
    // The only case the client shows an error: the lead was not stored.
    console.error('[mailer] lead not saved:', err instanceof Error ? err.message : err)
    return res.status(500).json({ error: 'Not saved' })
  }

  // Deliver before responding: in Pages API on Vercel work after the response may be frozen
  // (`after()` from Next 15.1+ is not available on Next 14). Each channel has its own timeout.
  if (!saved.duplicate) {
    try {
      const lead = await deliverLead(saved.lead)
      if (lead.status !== 'delivered') console.warn(`[mailer] lead #${lead.id} not fully delivered: ${lead.lastError}`)
    } catch (err) {
      console.error(
        `[mailer] lead #${saved.lead.id} delivery bookkeeping failed:`,
        err instanceof Error ? err.message : err
      )
    }
  }

  return res.status(200).json({ ok: true, id: saved.lead.id })
}
