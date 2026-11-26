import { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'

import { incrementPostViews } from '@/lib/_actions/blog'

// Public endpoint (view counter in `NewsList/HeaderBlock`): only +1 to `views`.
const bodySchema = yup.object({
  id: yup.number().strict().integer().positive().required(),
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
    const views = await incrementPostViews(body.id)
    if (views === null) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json({ views })
  } catch {
    return res.status(500).json({ error: 'Update failed' })
  }
}
