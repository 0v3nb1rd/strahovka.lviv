import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`logo flex-0 btn-ghost btn h-auto w-52 items-end p-2 text-lg font-black transition-all hover:bg-transparent ${
        className ? className : ''
      }`}
    >
      <span className="first-letter: relative z-10 -mr-5">STRAHOVKA</span>
      <Image src="/logo.svg" alt="logo" width={64} height={64} className=" h-[64px] w-[64px] transition-all" />
    </Link>
  )
}

export default Logo
