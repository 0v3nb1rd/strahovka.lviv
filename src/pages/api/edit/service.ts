import { revalidatePath } from 'next/cache'
import { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '@/lib/prisma'
import { updServiceTitle } from '@/lib/_actions/services'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    const { serviceCat } = await updServiceTitle(body.id, body.html)
    return res.status(200).json(serviceCat)
  }

  return res.status(200).json({ method, done: 'false' })
}
