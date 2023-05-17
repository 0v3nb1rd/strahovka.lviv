import { Suspense } from 'react'
import cn from 'classnames'
import { News } from '@prisma/client'

import NewsCard from './NewsCard'

import SkeletonNews from '@/app/news/components/LoadingTopNews'

interface Props {
  newsData: News[]
  maxLength?: number
}

export default function NewsList({ newsData, maxLength }: Props) {
  return (
    <ul
      className={cn('grid gap-6', {
        'sm:grid-cols-2 lg:grid-cols-3': maxLength === 3,
      })}
    >
      {/* <li className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <SkeletonNews />
      </li> */}

      {newsData?.slice(0, maxLength).map((data: News) => (
        <li key={data.id}>
          <Suspense fallback={<SkeletonNews />}>
            <NewsCard maxLength={maxLength} data={data} />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}
