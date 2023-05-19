import prisma from '@/lib/prisma'

// import { NextResponse } from 'next/server'
// // import prisma from '@/lib/prisma'

// // import { v4 as uuid } from 'uuid'

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url)

//   console.log(req, searchParams)

//   // await prisma.news.update({
//   //     where: { slug: slug },
//   //     data: { like_count: { increment: 1 } },
//   //   })
//   return NextResponse.json({ message: 'done!' })
// }

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
