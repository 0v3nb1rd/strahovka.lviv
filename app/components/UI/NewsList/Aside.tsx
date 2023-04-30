'use client'

import { useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { BiInfoCircle, BiHome, BiNews } from 'react-icons/bi'

const Aside = (props: any) => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  return (
    <aside className="sticky top-[5.5rem] h-full w-[240px]">
      <div className="mb-6 flex flex-col gap-2">
        <Link
          href="/news/"
          className={`btn-ghost btn-block btn justify-start gap-2 text-base normal-case ${!type ? 'btn-active' : ''}`}
        >
          <BiHome fontSize={24} /> Усі статті
        </Link>
        <Link
          href="/news/?type=news"
          className={`btn-ghost btn-block btn justify-start gap-2 text-base normal-case ${
            type === 'news' ? 'btn-active' : ''
          }`}
        >
          <BiNews fontSize={24} /> Новини
        </Link>
        <Link
          href="/news/?type=tips"
          className={`btn-ghost btn-block btn justify-start gap-2 text-base normal-case ${
            type === 'tips' ? 'btn-active' : ''
          }`}
        >
          <BiInfoCircle fontSize={24} /> Поради
        </Link>
      </div>
    </aside>
  )
}

export default Aside
