import { NextApiRequest, NextApiResponse } from 'next'
import * as yup from 'yup'

import { requireAdmin } from '@/lib/auth/requireAdmin'
import { updService } from '@/lib/_actions/services'

// The editor (`components/Editor/EditTitle`) changes only the service category title.
// `noUnknown` + `stripUnknown` drop every other field so slug, texts etc. cannot be overwritten.
const bodySchema = yup
  .object({
    id: yup.number().integer().positive().required(),
    data: yup
      .object({
        title: yup.string().trim().min(1).max(500).required(),
      })
      .noUnknown()
      .required(),
  })
  .noUnknown()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const user = await requireAdmin(req, res)
  if (!user) return

  let body: yup.InferType<typeof bodySchema>
  try {
    body = await bodySchema.validate(req.body, { stripUnknown: true })
  } catch {
    return res.status(400).json({ error: 'Invalid input' })
  }

  const { serviceCat, error } = await updService({ id: body.id, data: { title: body.data.title } })
  if (error || !serviceCat) {
    return res.status(500).json({ error: 'Update failed' })
  }

  return res.status(200).json({ id: serviceCat.id, title: serviceCat.title })
}
