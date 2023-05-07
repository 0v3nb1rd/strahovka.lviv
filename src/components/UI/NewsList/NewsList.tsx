import { Suspense } from 'react'
import cn from 'classnames'

import NewsCard from './NewsCard'
import SkeletonNews from '../../../app/(client)/news/loading'

const NewsList: React.FC<any> = ({ newsData, maxLength = undefined }) => {
  return (
    <ul
      className={cn('grid gap-6', {
        'sm:grid-cols-2 lg:grid-cols-3': maxLength === 3,
      })}
    >
      {/* <li className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <SkeletonNews />
      </li> */}

      {newsData?.slice(0, maxLength).map((data: any) => (
        <li key={data.id}>
          <Suspense fallback={<SkeletonNews />}>
            <NewsCard maxLength={maxLength} {...data} />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}

export default NewsList
