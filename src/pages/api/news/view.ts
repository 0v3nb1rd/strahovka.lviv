import prisma from '@/lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    const data = await req.body

    try {
      const newData = await prisma.post.update({
        where: { id: data.id },
        data: {
          views: { increment: 1 },
        },
      })
      return res.status(200).json({ views: newData.views })
    } catch (err) {
      console.log(err)
    }
    return res.status(200).json(data)
  }

  res.status(400).json({ message: 'Bed request' })
}
