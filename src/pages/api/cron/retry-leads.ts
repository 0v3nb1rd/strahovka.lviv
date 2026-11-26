import { timingSafeEqual } from 'node:crypto'
import { NextApiRequest, NextApiResponse } from 'next'

import { retryUndeliveredLeads } from '@/lib/leads/retry'

// Called by Vercel Cron (vercel.json), production deployments only. Vercel sends
// `Authorization: Bearer <CRON_SECRET>`; without the secret configured the endpoint stays closed.
export const config = { maxDuration: 60 }

function authorized(header: string | undefined): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret || !header) return false
  const a = Buffer.from(header)
  const b = Buffer.from(`Bearer ${secret}`)
  return a.length === b.length && timingSafeEqual(a, b)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  if (!authorized(req.headers.authorization)) return res.status(401).json({ error: 'Unauthorized' })

  try {
    const report = await retryUndeliveredLeads()
    if (report.checked) console.log('[cron] retry-leads', report)
    return res.status(200).json(report)
  } catch (err) {
    console.error('[cron] retry-leads failed:', err instanceof Error ? err.message : err)
    return res.status(500).json({ error: 'Retry failed' })
  }
}
