import { Post } from '@prisma/client'
import Link from 'next/link'

import BlurImage from '../Blur-image'
import prisma from '@/lib/prisma'

interface Props {
  maxLength?: number
}

const fetchTopNews = async (): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    take: 3,
    orderBy: {
      like_count: 'desc',
    },
  })

  // ToDo should add arror page & remove possibility return null
  return res
}

const RelatedPosts = async ({ maxLength }: Props) => {
  const newsData = await fetchTopNews()

  return (
    <ul>
      {newsData?.slice(0, maxLength).map((data: Post) => (
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
              <BlurImage src={`${data?.image_url}`} alt={data?.title} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className="object-cover" />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default RelatedPosts
