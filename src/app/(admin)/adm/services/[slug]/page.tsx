import { Service_category } from '@prisma/client'

import prisma from '@/lib/prisma'

import Image from 'next/image'
import Link from 'next/link'
import BlurImage from '@/components/Blur-image'

interface Props {
  params: { slug: string }
}

const fetchServiceBySlug = async (slug: string): Promise<Service_category | null> => {
  const res = await prisma.service_category.findFirst({ where: { slug: slug } })

  // ToDo should add error page & remove possibility return null
  return res
}

export default async function NewPage({ params }: Props) {
  const service = await fetchServiceBySlug(params.slug)

  return (
    <section className="relative mx-10 rounded-2xl bg-white p-14 pb-20 shadow-md">
      <Link
        href="/services"
        className="btn-outline btn-circle btn absolute right-4 top-4 text-primary hover:border-transparent hover:bg-primary"
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
      <div className="flex flex-col gap-8">
        <div className="title mx-auto max-w-2xl">
          <div className="flex flex-col items-center">
            <span className="badge badge-secondary badge-lg mb-3">{service?.category_ua}</span>
            <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
              {service?.title}
            </h1>
          </div>
        </div>

        <div className="relative h-[480px] overflow-hidden rounded-2xl">
          {/* <Image src={`${service?.image_url}`} className="object-cover" fill alt={`${service?.title}`} /> */}
          <BlurImage src={`${service?.image_url}`} className="object-cover" alt={`${service?.title}`} fill />
        </div>

        <div
          className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60"
          dangerouslySetInnerHTML={{ __html: service?.full_text || '' }}
        ></div>
      </div>
    </section>
  )
}
