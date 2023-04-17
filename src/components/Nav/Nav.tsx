'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { removeTrailingSlash } from '@/utils'

const dataLinks = [
  {
    label: 'Новини',
    path: '/news',
    activeSegment: 'news',
  },
  {
    label: 'Послуги',
    path: '/services',
    activeSegment: 'services',
  },
  {
    label: 'Співпраця',
    path: '/cooperation',
    activeSegment: 'cooperation',
  },
  {
    label: 'Контакти',
    path: '/contacts',
    activeSegment: 'contacts',
  },
]

const Nav: React.FC = () => {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-4">
      {dataLinks.map((link) => (
        <li key={link.path}>
          <Link href={link.path} className={`btn ${pathname.includes(link.path) ? 'btn-active' : ''}`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
