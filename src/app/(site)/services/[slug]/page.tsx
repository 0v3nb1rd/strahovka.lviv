import { getRelatedService, getServiceCatBySlug } from '@/lib/_actions/services'

import Image from 'next/image'
import Link from 'next/link'
import BlurImage from '@/components/Blur-image'
import ServiceCards from '@/components/ServiceCards/ServiceCards'
import { Suspense } from 'react'
import Badge from '@/components/Badge'

interface Props {
  params: { slug: string }
}

const loader = `
	<div className="loader">
    <div className="spinner"></div>
  </div>`

export default async function NewPage({ params }: Props) {
  const { serviceCat } = await getServiceCatBySlug(params.slug)
  const { service } = await getRelatedService(serviceCat?.id || 1)

  return (
    <section className="relative rounded-2xl bg-white p-14 pb-20 shadow-md md:mx-10">
      <div className="tooltip absolute right-4 top-4 md:tooltip-right" data-tip="назад">
        <Link
          href="/services"
          className="btn-outline btn-circle btn text-primary hover:border-transparent hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        <div className="title mx-auto w-[42rem] max-w-full">
          <div className="flex flex-col items-center">
            <span
              className="badge-secondary badge badge-lg mb-3"
              dangerouslySetInnerHTML={{ __html: serviceCat?.category_ua || '' }}
            />
            <h1
              className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight"
              dangerouslySetInnerHTML={{ __html: serviceCat?.title || '' }}
            />
          </div>
        </div>

        <div className="relative h-52 overflow-hidden  rounded-2xl sm:h-64 md:h-[480px]">
          <BlurImage src={`${serviceCat?.image_url}`} className="object-cover" alt={`${serviceCat?.title}`} fill />
        </div>

        <div
          className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60"
          dangerouslySetInnerHTML={{ __html: serviceCat?.full_text || '' }}
        />

        {Boolean(service?.length) && (
          <Suspense fallback={loader}>
            <div className="divider">
              <img src="/icons/service.svg" className="h-10 w-10 " />
            </div>
            <div id="service">
              <h2 className="text-center text-2xl font-bold text-gray-600 md:text-3xl">
                {serviceCat?.title} замовити:
              </h2>
            </div>
            <ServiceCards service={service} />
          </Suspense>
        )}
      </div>
    </section>
  )
}
