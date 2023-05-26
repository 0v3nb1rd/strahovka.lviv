import { News } from '@prisma/client'
import Link from 'next/link'

import BlurImage from '../Blur-image'
import prisma from '@/lib/prisma'

interface Props {
  maxLength?: number
}

const fetchTopNews = async (): Promise<News[]> => {
  const res = await prisma.news.findMany({
    take: 3,
    orderBy: {
      like_count: 'desc',
    },
  })

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function RelatedPosts({ maxLength }: Props) {
  const newsData = await fetchTopNews()

  return (
    <ul>
      {newsData?.slice(0, maxLength).map((data: News) => (
        <li key={data.id}>
          <Link
            href={`/blog/${data?.category}/${data?.slug}`}
            className="group mt-4 flex items-center justify-between gap-2"
          >
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-xs text-neutral-700">{data?.category}</span>
              <h3 className="line-clamp-2 text-sm font-semibold transition group-hover:text-primary group-hover:underline">
                {data?.title}
              </h3>
            </div>
            <figure className="relative h-14 w-10 overflow-hidden rounded-lg transition  group-hover:shadow">
              <BlurImage src={`${data?.image_url}`} alt={data?.title} fill className="object-cover" />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  )
}
