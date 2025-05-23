import { getServiceCatBySlug, updateServiceCat } from '@/lib/_actions/services'

import Image from 'next/image'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'

import NoSSRWrapper from '@/components/NoSSRWrapper'
import { EditorService } from '@/components/Editor/EditorService'

interface Props {
  params: { slug: string }
}

export const dynamic = 'force-dynamic'

export default async function NewPage({ params }: Props) {
  const { serviceCat } = await getServiceCatBySlug(params.slug)

  if (!serviceCat) {
    return <h2>Data is not loading</h2>
  }
  return (
    <NoSSRWrapper>
      <EditorService serviceCat={serviceCat} />
    </NoSSRWrapper>
  )
}
