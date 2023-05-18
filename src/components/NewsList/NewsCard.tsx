import Link from 'next/link'
import cn from 'classnames'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'
import { News } from '@prisma/client'

import Badge from '../Badge'
import BlurImage from '../Blur-image'

import HeaderBlock from './HeaderBlock'
import FooterBlock from './FooterBlock'

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
          <HeaderBlock date={data?.created_at} category={data?.category_ua} id={data?.id} views={data?.views} />
        )}

        <h2 className={`line-clamp-3 font-medium ${maxLength === 3 ? 'text-xl' : 'text-2xl'}`}>{data?.title}</h2>
      </div>

      <figure
        className={cn(' relative mt-auto w-full', {
          'h-[240px]': maxLength === 3,
          'h-[360px]': !maxLength,
        })}
      >
        <BlurImage
          src={`${data?.image_url}`}
          alt={data?.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>

      {maxLength === undefined && <FooterBlock id={data?.id} likes={data?.like_count} />}
    </Link>
  )
}
