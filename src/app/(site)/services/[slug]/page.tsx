import { Service, Service_category } from '@prisma/client'

import prisma from '@/lib/prisma'

import Image from 'next/image'
import Link from 'next/link'
import BlurImage from '@/components/Blur-image'
import ServiceCards from '@/components/ServiceCards/ServiceCards'
import { Suspense } from 'react'
import Badge from '@/components/Badge'

interface Props {
  params: { slug: string }
}

const loader = `<div className="loader">
    <div className="spinner"></div>
  </div>`

const fetchServiceCatBySlug = async (slug: string): Promise<Service_category | null> => {
  const res = await prisma.service_category.findFirst({
    where: { slug: slug },
  })

  // ToDo should add error page & remove possibility return null
  return res
}
const fetchRelatedService = async (service_cat_id: number): Promise<Service[]> => {
  const res = await prisma.service.findMany({
    include: {
      services_category: true,
    },
    where: {
      services_category_id: service_cat_id,
    },
  })

  // ToDo should add error page & remove possibility return null
  return res
}

export default async function NewPage({ params }: Props) {
  const service_cat = await fetchServiceCatBySlug(params.slug)
  const service = await fetchRelatedService(service_cat?.id || 1)

  return (
    <section className="relative mx-10 rounded-2xl bg-white p-14 pb-20 shadow-md">
      <div className="tooltip tooltip-right  absolute right-4 top-4" data-tip="назад">
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
        <div className="title mx-auto max-w-2xl">
          <div className="flex flex-col items-center">
            <span className="badge-secondary badge badge-lg mb-3">{service_cat?.category_ua}</span>
            <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
              {service_cat?.title}
            </h1>
          </div>
        </div>

        <div className="relative h-[480px] overflow-hidden rounded-2xl">
          <BlurImage src={`${service_cat?.image_url}`} className="object-cover" alt={`${service_cat?.title}`} fill />
        </div>

        <div
          className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60"
          dangerouslySetInnerHTML={{ __html: service_cat?.full_text || '' }}
        />

        {service.length > 0 && (
          <>
            <div className="divider">
              <img src="/icons/service.svg" className=" h-10 w-10" />
            </div>
            <div id='service'>
              <h2 className="text-center text-2xl font-bold text-gray-600 md:text-3xl">
                {service_cat?.title} замовити:
              </h2>
            </div>

            <Suspense fallback={loader}>
              <ServiceCards service={service} />
            </Suspense>
          </>
        )}
      </div>
    </section>
  )
}
