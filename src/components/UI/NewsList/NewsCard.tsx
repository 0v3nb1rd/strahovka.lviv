import Image, { StaticImageData } from 'next/image'
import {
  BiLike,
  BiShare,
  BiMessageAltDetail,
  BiShow,
  BiInfoCircle,
  BiHome,
  BiBookmark,
  BiNews,
  BiTimeFive,
} from 'react-icons/Bi'

import Badge from '@/components/UI/Badge'

import img_post_1 from '@/assets/img/img_1.jpg'
import img_post_2 from '@/assets/img/img_2.jpg'
import img_post_3 from '@/assets/img/img_3.jpg'
import img_post_4 from '@/assets/img/img_4.jpg'

type likesType = {
  amount: number
  liked: boolean
}
interface NewsCardProps {
  category: string
  date: string
  title: string
  description?: string
  views: number
  imageUrl: StaticImageData
  reviews: number
  likes: likesType
}

const NewsCard: React.FC<NewsCardProps> = ({ category, date, title, views, imageUrl, reviews, likes }) => {
  return (
    <article className="rounded-2xl bg-white">
      <div className="mb-7">
        <div className="px-5 py-4">
          <ul className="header mb-3 flex gap-6">
            <li className="">
              <a>
                <Badge variant="primary">{category}</Badge>
              </a>
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
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>

        <figure className="h- relative h-[360px] w-full">
          <Image src={imageUrl} alt="photo art 1" fill className="object-cover" />
        </figure>

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
      </div>
    </article>
  )
}

export default NewsCard
