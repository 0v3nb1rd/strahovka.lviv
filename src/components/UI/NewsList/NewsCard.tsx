import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'
import cn from 'classnames'

import Badge from '@/components/UI/Badge'

type likesType = {
  amount: number
  liked: boolean
}
interface NewsCardProps {
  category_en?: string
  category_ua?: string
  date: string
  title: string
  slug: string
  description?: string
  views: number
  imageUrl: StaticImageData
  reviews: number
  likes: likesType
  maxLength: number
}

const NewsCard: React.FC<NewsCardProps> = ({
  category_ua,
  date,
  maxLength,
  title,
  slug,
  views,
  imageUrl,
  reviews,
  likes,
}) => {
  return (
    <Link
      href={`/news/${slug}`}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow transition-all delay-75 duration-100 hover:shadow-xl"
    >
      <div className="px-5 py-4">
        {maxLength === undefined && (
          <ul className="header mb-3 flex gap-6">
            <li className="">
              <div>
                <Badge variant="primary">{category_ua}</Badge>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <BiTimeFive />
              <span className="countdown text-base">{date}</span>
            </li>
            <li className="ml-auto flex items-center gap-2">
              <BiShow fontSize={22} />
              <span className="countdown w-5 text-base">
                <span style={{ '--value': views } as React.CSSProperties}></span>
              </span>
            </li>
          </ul>
        )}

        <h2 className={`line-clamp-3 font-medium ${maxLength === 3 ? 'text-xl' : 'text-2xl'}`}>{title}</h2>
      </div>

      <figure
        className={cn(' relative mt-auto w-full', {
          'h-[240px]': maxLength === 3,
          'h-[360px]': !maxLength,
        })}
      >
        <Image src={imageUrl} alt="photo art 1" fill className="object-cover" />
      </figure>

      {maxLength === undefined && (
        <div className="flex gap-10 px-5 py-4">
          <button className="group flex items-center gap-2 transition">
            <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
            <span className="countdown w-5 text-base">
              <span style={{ '--value': reviews } as React.CSSProperties}></span>
            </span>
          </button>
          <button className="group">
            <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
          </button>
          <button className="group">
            <BiShare fontSize={22} className="transition group-hover:scale-110" />
          </button>
          <button className="group ml-auto flex items-center gap-2">
            <BiLike fontSize={22} className={`transition group-hover:scale-110 ${likes.liked ? 'text-red-500' : ''}`} />
            <span className="countdown w-5 text-base">
              <span style={{ '--value': likes.amount } as React.CSSProperties}></span>
            </span>
          </button>
        </div>
      )}
    </Link>
  )
}

export default NewsCard
