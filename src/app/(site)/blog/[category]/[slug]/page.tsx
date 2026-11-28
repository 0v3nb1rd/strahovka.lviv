import dynamic from 'next/dynamic'

import { getPostBySlug } from '@/lib/_actions/blog'
import { sanitizeRich } from '@/lib/sanitize'
import { baseUrl } from '@/utils'
import BlurImage from '@/components/Blur-image'

const DisqusComments = dynamic(() => import('@/components/DisqusComments'), { ssr: false })

import { FooterBlock, HeaderBlock } from '@/components/NewsList'

interface Props {
  params: {
    slug: string
  }
}

export default async function NewPage({ params }: Props) {
  const data = await getPostBySlug(params.slug)

  return (
    <div className="flex flex-col">
      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="px-5 py-4">
          <HeaderBlock
            date={data?.created_at}
            category={data?.category_ua}
            id={data?.id}
            views={data?.views}
            isFullPage
          />

          <h2 className="line-clamp-3 text-2xl font-medium">{data?.title}</h2>
        </div>

        <figure className="relative mt-auto h-[360px] w-full">
          <BlurImage
            src={`${data?.image_url}`}
            alt="image news page"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </figure>

        <div className="description px-5 py-4">
          <div id="content" dangerouslySetInnerHTML={{ __html: sanitizeRich(data?.full_text) }} />
        </div>

        <FooterBlock id={data?.id} likes={data?.like_count} />
      </div>

      <div className="relative mb-6 flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="p-5">
          <DisqusComments post={{ id: '1', title: data?.title }} path={`${baseUrl}/news/${params.slug}`} />
          <p>Comments Block: </p>
        </div>
      </div>
    </div>
  )
}
