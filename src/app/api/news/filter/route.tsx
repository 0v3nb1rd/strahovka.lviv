import { NextResponse } from 'next/server'
import newsData from '../data.json'

// export const GET = async (req: Request) => {
//   return new Response("It's a GET request")
// }

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url)
//   const type = searchParams.get('type')

//   if (type) {
//     const filteredNews = newsData.filter((newsItem) => {
//       return newsItem.category.toLowerCase().includes(type.toLowerCase())
//     })
//     return NextResponse.json(filteredNews)
//   } else {
//     return NextResponse.json([{ message: 'Params are not correct 😔' }])
//   }
// }
