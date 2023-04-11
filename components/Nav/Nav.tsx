import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href="/news" className="btn-primary btn">
          Новини
        </Link>
      </li>
      <li>
        <Link href="/services" className="btn-primary btn">
          Послуги
        </Link>
      </li>
      <li>
        <Link href="/cooperation" className="btn-primary btn">
          Співпраця
        </Link>
      </li>
      <li>
        <Link href="/contacts" className="btn-primary btn">
          Контакти
        </Link>
      </li>
    </ul>
  )
}

export default Nav
