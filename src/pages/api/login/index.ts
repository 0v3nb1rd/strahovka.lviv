import { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'
import * as yup from 'yup'

import prisma from '@/lib/prisma'

// Called from NextAuth `authorize` (`pages/api/auth/[...nextauth].ts`).
// The schema guarantees strings: an object in `email` would become a Prisma filter (e.g. `{ contains: "@" }`).
// Goes away after the move to Better Auth.
const bodySchema = yup.object({
  username: yup.string().strict().email().max(254).required(),
  password: yup.string().strict().min(1).max(200).required(),
})

// Compared against when the user is not found, so the response takes the same time
// and timing does not reveal whether the email exists.
const DUMMY_HASH = '$2b$10$I8v7WBC3rBGwC3b9GGqpfui68sE6lSggKL7je4ksRYwMTCfvj/n/2'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  let body: yup.InferType<typeof bodySchema>
  try {
    body = await bodySchema.validate(req.body, { stripUnknown: true })
  } catch {
    return res.status(400).json(null)
  }

  const user = await prisma.user.findUnique({ where: { email: body.username } })
  const valid = await bcrypt.compare(body.password, user?.password ?? DUMMY_HASH)

  if (!user || !valid) {
    return res.status(401).json(null)
  }

  const { password, ...userWithoutPassword } = user
  return res.status(200).json(userWithoutPassword)
}
