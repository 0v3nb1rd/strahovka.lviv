import prisma from '@/lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    const data = await req.body

    try {
      const newData = await prisma.news.update({
        where: { id: data.id },
        data: {
          like_count: { [data.action]: 1 },
        },
      })
      return res.status(200).json({ like_count: newData.like_count })
    } catch (err) {
      console.log(err)
    }
    return res.status(200).json(data)
  }

  res.status(400).json({ message: 'Bed request' })
}
