import { revalidatePath } from 'next/cache'
import { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '@/lib/prisma'
import { updService } from '@/lib/_actions/services'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    const { serviceCat } = await updService(body)
    return res.status(200).json(serviceCat)
  }

  return res.status(200).json({ method, done: 'false' })
}
