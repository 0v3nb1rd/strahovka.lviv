import { NextResponse } from 'next/server'
// import { v4 as uuid } from 'uuid'

import newsData from './data.json'

export const GET = async (req: Request) => {
  return NextResponse.json(newsData)
}

// export async function POST(req: Request) {
//   const { title, description, link, level } = await req.json()

//   const newCourse = {
//     id: uuid(),
//     title,
//     description,
//     link,
//     level,
//   }

//   // newsData.push(newCourse)

//   return NextResponse.json(newsData)
// }
