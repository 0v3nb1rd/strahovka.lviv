import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'

import Badge from '../Badge'
import { News } from '@prisma/client'

interface Props {
  data: News
  maxLength?: number
}

export default function NewsCard({ data, maxLength }: Props) {
  return (
    <Link
      href={`/news/${data?.slug}`}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow transition-all delay-75 duration-100 hover:shadow-xl"
    >
      <div className="px-5 py-4">
        {maxLength === undefined && (
          <ul className="header mb-3 flex gap-6">
            <li className="">
              <div>
                <Badge variant="primary">{data?.category_ua}</Badge>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <BiTimeFive />
              <span className="countdown text-base">{data?.created_at}</span>
            </li>
            <li className="ml-auto flex items-center gap-2">
              <BiShow fontSize={22} />
              <span className="countdown w-5 text-base">
                <span style={{ '--value': data.views } as React.CSSProperties}></span>
              </span>
            </li>
          </ul>
        )}

        <h2 className={`line-clamp-3 font-medium ${maxLength === 3 ? 'text-xl' : 'text-2xl'}`}>{data?.title}</h2>
      </div>

      <figure
        className={cn(' relative mt-auto w-full', {
          'h-[240px]': maxLength === 3,
          'h-[360px]': !maxLength,
        })}
      >
        <Image src={`${data?.image_url}`} alt={data?.title} fill className="object-cover" />
      </figure>

      {maxLength === undefined && (
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
              <span style={{ '--value': data?.like_count } as React.CSSProperties}></span>
            </span>
          </button>
        </div>
      )}
    </Link>
  )
}
