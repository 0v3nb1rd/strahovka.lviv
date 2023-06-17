import { Service_category } from '@prisma/client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  service: Service_category
  isAdm?: boolean
}

export default function Service({ service, isAdm = false }: Props) {
	
  return (
    <Link
      href={service.slug}
      className="flex h-full flex-col gap-14 rounded-2xl bg-white px-8 py-10 shadow-md transition-all delay-75 duration-100 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="title mx-auto max-w-2xl">
        <div className="flex flex-col items-center">
          <span className="badge-secondary badge badge-lg mb-3">{service.category_ua}</span>
          <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
            {service.title}
          </h1>
          <p className="text-center text-lg font-semibold text-black/60">{service.short_text}</p>
        </div>
      </div>

      <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
        <Image
          className="object-contain"
          src={service.thumbnail_url as string}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt="image cooperation"
        />
      </div>
    </Link>
  )
}
