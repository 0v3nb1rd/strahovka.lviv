import { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'

import { changePostLikes } from '@/lib/_actions/blog'

// Public endpoint (like button in `NewsList/FooterBlock`). Only ±1 is allowed:
// `action` used to be passed to the ORM as is, so `set`, `multiply`… could set any value.
const bodySchema = yup.object({
  id: yup.number().strict().integer().positive().required(),
  action: yup.mixed<'increment' | 'decrement'>().oneOf(['increment', 'decrement']).required(),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  let body: yup.InferType<typeof bodySchema>
  try {
    body = await bodySchema.validate(req.body, { stripUnknown: true })
  } catch {
    return res.status(400).json({ error: 'Invalid input' })
  }

  try {
    const like_count = await changePostLikes(body.id, body.action)
    if (like_count === null) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json({ like_count })
  } catch {
    return res.status(500).json({ error: 'Update failed' })
  }
}
