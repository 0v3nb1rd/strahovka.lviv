import { NextApiRequest, NextApiResponse } from 'next'
import * as bcrypt from 'bcrypt'

import prisma from '@/lib/prisma'

interface reqBody {
  username: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body: reqBody = await req.body

    const user = await prisma.user.findFirst({
      where: {
        email: body.username,
      },
    })

    // if (user && user.password === body.password) {
    if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPassword } = user

      return res.status(200).json(userWithoutPassword)
    } else {
      return res.status(200).json(null)
    }
  }

  return res.status(200).json({ GET: 'GET' })
}
