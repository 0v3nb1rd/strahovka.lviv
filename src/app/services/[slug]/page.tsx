import Image from 'next/image'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/bi'

import Badge from '@/components/UI/Badge'

const NewPage = async ({ params }: { params: any }) => {
  return (
    <main className="main main--services pt-32">
      <div className="container mx-auto">{params[0]?.title}</div>
    </main>
  )
}

export default NewPage
