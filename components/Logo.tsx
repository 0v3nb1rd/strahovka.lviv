import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex-0 btn-ghost btn h-auto items-end p-2 text-lg font-black hover:bg-transparent">
      <span className="first-letter: relative z-10 -mr-5 ">STRAHOVKA</span>
      <Image src="/logo.svg" alt="logo" width={64} height={64} />
    </Link>
  )
}

export default Logo
