import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href="/news" className=" btn">
          Новини
        </Link>
      </li>
      <li>
        <Link href="/services" className=" btn">
          Послуги
        </Link>
      </li>
      <li>
        <Link href="/cooperation" className=" btn">
          Співпраця
        </Link>
      </li>
      <li>
        <Link href="/contacts" className=" btn">
          Контакти
        </Link>
      </li>
    </ul>
  )
}

export default Nav
