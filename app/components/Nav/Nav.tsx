'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { mainRoute } from '../../../routes'

interface NavProps {
  className?: string
}

const Nav: React.FC<NavProps> = ({ className, ...rest }) => {
  const pathname = usePathname()

  return (
    <ul className={className}>
      {mainRoute.map((link) => (
        <li key={link.id}>
          <Link href={link.path} className={`btn ${pathname.includes(link.path) ? 'btn-active' : ''}`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
