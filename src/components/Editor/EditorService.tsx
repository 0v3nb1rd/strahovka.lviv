'use client'

import { revalidatePath } from 'next/cache'

import BlurImage from '@/components/Blur-image'
import { EditFullText } from './EdditFullText'
import { Service, Service_category } from '@prisma/client'
import { useEffect, useRef } from 'react'

export const EditorService = ({ serviceCat }: { serviceCat: Service_category }) => {
  const refTitle = useRef(null)
  const refFullText = useRef(null)

  useEffect(() => {
    console.log(refFullText.current) // logs <div>Hello, World!</div>
  }, [])

  return (
    <form>
      <section className="relative mx-10 rounded-2xl bg-white p-14 pb-20 shadow-md">
        <div className="flex flex-col gap-8">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">{serviceCat?.category_ua}</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                {serviceCat?.title}
                {/* <EditTitle/> */}
              </h1>
            </div>
          </div>

          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <BlurImage src={`${serviceCat?.image_url}`} className="object-cover" alt={`${serviceCat?.title}`} fill />
          </div>

          {/* {serviceCat?.full_text && <EditFullText text={serviceCat.full_text} ref={refFullText} />} */}
          <EditFullText text={serviceCat?.full_text} ref={refFullText} />
        </div>
      </section>

      <div className="mx-24 mb-4 mt-8 flex items-center justify-center">
        <button className="btn-error btn-block btn">Update</button>
      </div>
    </form>
  )
}
