import { getServiceCatBySlug, updateServiceCat } from '@/lib/_actions/services'

import Image from 'next/image'
import Link from 'next/link'
import BlurImage from '@/components/Blur-image'
import { EditableServiceFooter } from './components/EdditableServiceFooter'
import { revalidatePath } from 'next/cache'

interface Props {
  params: { slug: string }
}

export default async function NewPage({ params }: Props) {
  const { serviceCat } = await getServiceCatBySlug(params.slug)
  // console.log(serviceCat?.id)

  return (
    <form>
      <section className="relative mx-10 rounded-2xl bg-white p-14 pb-20 shadow-md">
        <div className="flex flex-col gap-8">
          <div className="title mx-auto max-w-2xl">
            <div className="flex flex-col items-center">
              <span className="badge-secondary badge badge-lg mb-3">{serviceCat?.category_ua}</span>
              <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                {serviceCat?.title}
              </h1>
            </div>
          </div>

          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <BlurImage src={`${serviceCat?.image_url}`} className="object-cover" alt={`${serviceCat?.title}`} fill />
          </div>

          {serviceCat?.full_text && <EditableServiceFooter text={serviceCat.full_text} />}
        </div>
      </section>

      <div className="mx-24 mb-4 mt-8 flex items-center justify-center">
        <button className="btn-error btn-block btn">Update</button>
      </div>
    </form>
  )
}
