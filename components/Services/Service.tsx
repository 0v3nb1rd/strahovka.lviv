import Image, { StaticImageData } from 'next/image'
import { SVGProps } from 'react'

interface ServiceProps {
  title: string
  category: string
  description: string
  imgUrl: StaticImageData
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ffff" offset="20%" />
      <stop stop-color="#ffff" offset="50%" />
      <stop stop-color="#ffff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ffff" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

const Service: React.FC<ServiceProps> = ({ title, category, description, imgUrl }) => {
  return (
    <article className=" flex-1 rounded-2xl  bg-white px-8 py-10 shadow-md">
      <div className="flex h-full flex-col gap-14">
        <div className="title mx-auto max-w-2xl">
          <div className="flex flex-col items-center">
            <span className="badge badge-secondary badge-lg mb-3">{category}</span>
            <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
              {title}
            </h1>
            <p className="text-center text-lg font-semibold text-black/60">{description}</p>
          </div>
        </div>

        <div className="relative mt-auto h-[240px] overflow-hidden rounded-2xl">
          <Image
            className="object-contain"
            src={imgUrl}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt="image cooperation"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </div>
      </div>
    </article>
  )
}

export default Service
