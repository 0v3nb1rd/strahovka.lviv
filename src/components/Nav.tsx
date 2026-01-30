'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { mainRoute } from '@/routes'

interface NavProps {
  className?: string
}

const Nav: React.FC<NavProps> = ({ className, ...rest }) => {
  const pathname = usePathname()

  return (
    <ul className={className}>
      {mainRoute.map((link) => (
        <li key={link.id}>
          <Link
            href={link.path}
            className={`btn bg-trueblue text-white hover:bg-darkBlue focus:bg-darkBlue ${pathname?.includes(link.path) ? 'btn-active ring-2 ring-offset-2' : ''}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
