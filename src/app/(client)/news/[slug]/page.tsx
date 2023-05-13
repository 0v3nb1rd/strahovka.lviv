import Image from 'next/image'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'
import { PrismaClient, News } from '@prisma/client'

import Badge from '../../../../components/UI/Badge'
import { baseUrl } from '@/utils'
import DisqusComments from '@/components/DisqusComments'

interface Props {
  params: {
    slug: string
  }
}

const prisma = new PrismaClient()

const fetchNewsItem = async (slug: string): Promise<News | null> => {
  const res = await prisma.news.findUnique({
    where: {
      slug: slug,
    },
  })

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function NewPage({ params }: Props) {
  const newsItem = await fetchNewsItem(params.slug)

  // const { id, category_ua, date, title, views, description, imageUrl, reviews, likes, maxLength }: any = newsData.find(
  //   (x: any) => x.slug === params.slug
  // )

  return (
    <div className="flex flex-col">
      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="px-5 py-4">
          <ul className="header mb-3 flex gap-6">
            <li className="">
              <div>
                <Badge variant="primary">{newsItem?.category_ua}</Badge>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <BiTimeFive />
              <span className="countdown text-base">{newsItem?.created_at?.toString()}</span>
            </li>
            <li className="ml-auto flex items-center gap-2">
              <BiShow fontSize={22} />
              <span className="countdown w-5 text-base">
                <span style={{ '--value': newsItem?.views } as React.CSSProperties}></span>
              </span>
            </li>
          </ul>

          <h2 className="line-clamp-3 text-2xl font-medium">{newsItem?.title}</h2>
        </div>

        <figure className="relative mt-auto h-[360px] w-full">
          <Image src={`${newsItem?.image_url}`} alt={`${newsItem?.title}`} fill className="object-cover" />
        </figure>

        <p className="description px-5 py-4" dangerouslySetInnerHTML={{ __html: newsItem?.full_text || '' }} />

        <div className="flex gap-10 px-5 py-4">
          <button className="group flex items-center gap-2 transition">
            <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
            <span className="countdown w-5 text-base">
              <span style={{ '--value': 0 } as React.CSSProperties}></span>
            </span>
          </button>
          <button className="group">
            <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
          </button>
          <button className="group">
            <BiShare fontSize={22} className="transition group-hover:scale-110" />
          </button>
          <button className="group ml-auto flex items-center gap-2">
            <BiLike fontSize={22} className={`transition group-hover:scale-110 ${true ? 'text-red-500' : ''}`} />
            <span className="countdown w-5 text-base">
              <span style={{ '--value': newsItem?.like_count } as React.CSSProperties}></span>
            </span>
          </button>
        </div>
      </div>

      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="p-5">
          <DisqusComments post={{ id: '1', title: newsItem?.title }} path={`${baseUrl}/news/${params.slug}`} />
          <p>Comments Block: </p>
        </div>
      </div>
    </div>
  )
}
