import { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'

import { requireAdmin } from '@/lib/auth/requireAdmin'
import { getLead } from '@/lib/leads'
import { deliverLead } from '@/lib/leads/deliver'

// "Retry delivery" button in /adm/leads. Not limited by the automatic attempt count:
// the admin decides. Only channels that have not received the lead are retried.
export const config = { maxDuration: 30 }

const bodySchema = yup.object({ id: yup.number().strict().integer().positive().required() })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const user = await requireAdmin(req, res)
  if (!user) return

  let id: number
  try {
    ;({ id } = await bodySchema.validate(req.body, { stripUnknown: true }))
  } catch {
    return res.status(400).json({ error: 'Invalid input' })
  }

  const lead = await getLead(id)
  if (!lead) return res.status(404).json({ error: 'Not found' })
  if (lead.status === 'delivered') return res.status(200).json({ status: lead.status })

  try {
    const updated = await deliverLead(lead)
    return res.status(200).json({ status: updated.status, lastError: updated.lastError })
  } catch (err) {
    console.error(`[leads] manual retry of #${id} failed:`, err instanceof Error ? err.message : err)
    return res.status(500).json({ error: 'Retry failed' })
  }
}
