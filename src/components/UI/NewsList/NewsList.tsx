import cn from 'classnames'

import NewsCard from './NewsCard'

const NewsList: React.FC<any> = ({ newsData, maxLength = undefined }) => {
  return (
    <ul
      className={cn('grid gap-6', {
        'sm:grid-cols-2 lg:grid-cols-3': maxLength === 3,
      })}
    >
      {newsData?.slice(0, maxLength).map((data: any) => (
        <li key={data.id}>
          <NewsCard maxLength={maxLength} {...data} />
        </li>
      ))}
    </ul>
  )
}

export default NewsList
