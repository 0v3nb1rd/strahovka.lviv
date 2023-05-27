import { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'

import prisma from '@/lib/prisma'

interface reqBody {
  name: string
  email: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body: reqBody = await req.body

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    })

    const { password, ...result } = user
    return res.status(200).json(result)
  }

  return res.status(200).json({ GET: 'GET' })
}
