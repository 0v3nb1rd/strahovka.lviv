import Image from 'next/image'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'

import Badge from '@/components/UI/Badge'

interface paramsProps {
  params: {
    slug: string
  }
}

const fetchNews = async () => {
  const resp = await fetch(`${process.env.BASE_FETCH_URL}/api/news`)
  // await new Promise((res) => setTimeout(res, 2000))
  const newsData = await resp.json()
  return newsData
}

const NewPage = async ({ params: { slug } }: paramsProps) => {
  const newsData = await fetchNews()

  const { category_ua, date, title, views, description, imageUrl, reviews, likes, maxLength }: any = newsData.find(
    (x: any) => x.slug === slug
  )

  return (
    <div className="flex flex-col">
      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="px-5 py-4">
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

          <h2 className="line-clamp-3 text-2xl font-medium">{title}</h2>
        </div>

        <figure className="relative mt-auto h-[360px] w-full">
          <Image src={imageUrl} alt="photo art 1" fill className="object-cover" />
        </figure>

        <p className="description px-5 py-4" dangerouslySetInnerHTML={{ __html: description }} />

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

      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="p-5">
          <p>Comments Block: </p>
        </div>
      </div>
    </div>
  )
}

export default NewPage
