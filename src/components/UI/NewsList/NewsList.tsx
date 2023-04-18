import cn from 'classnames'

import NewsCard from './NewsCard'
import { v4 as uuid } from 'uuid'

import { StaticImageData } from 'next/image'

const NewsList: React.FC<any> = ({ newsData, maxLength = undefined }) => {
  return (
    <ul
      className={cn('grid gap-6', {
        'sm:grid-cols-2 lg:grid-cols-3': maxLength === 3,
      })}
    >
      {newsData.slice(0, maxLength).map((data: any) => (
        <NewsCard key={uuid()} maxLength={maxLength} {...data} />
      ))}
    </ul>
  )
}

export default NewsList
