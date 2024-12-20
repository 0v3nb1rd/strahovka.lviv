'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { BiInfoCircle, BiHome, BiNews } from 'react-icons/bi'

import { blogRoute } from '@/routes'

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-[5.5rem] h-full w-[240px]">
      <ul className="mb-6 flex flex-col gap-2">
        <li>
          <Link
            href="/blog"
            className={`btn-ghost btn-block btn justify-start gap-2 text-base normal-case ${
              pathname === '/blog/' ? 'btn-active' : ''
            }`}
          >
            <BiHome fontSize={24} />
            Усі статті
          </Link>
        </li>

        {blogRoute.map((route: any) => (
          <li key={route.id}>
            <Link
              href={route.path}
              className={`btn-ghost btn-block btn justify-start gap-2 text-base normal-case ${
                pathname?.includes(route.path) ? 'btn-active' : ''
              }`}
            >
              {<route.icon fontSize={24} />}
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
