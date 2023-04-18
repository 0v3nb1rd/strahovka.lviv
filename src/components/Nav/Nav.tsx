'use client'

import { mainRoute } from '@/routes'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav: React.FC = () => {
  const pathname = usePathname()

  return (
    <ul className="flex items-center gap-4">
      {mainRoute.map((link) => (
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
