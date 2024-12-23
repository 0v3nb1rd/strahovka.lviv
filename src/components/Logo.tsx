import Image from 'next/image'
import Link from 'next/link'

import siteConfig from '@/config/site'

export const Logo = ({ className, isHeader }: { className?: string, isHeader?: boolean }) => {
  return (
    <Link
      href="/"
      className={`flex-0 btn-ghost btn h-auto items-center gap-2 p-2 text-lg font-black italic transition-all hover:bg-transparent max-xl:mr-auto ${
        className ? className : ''
        }`}
    >
      <Image src={siteConfig.logo_src} alt="logo" width={64} height={64} className="h-[52px] w-auto transition-all" />
      {/* shadow primary */}
      <span className={`logo__text relative z-10 -mr-5 contents ${isHeader ? 'max-sm:hidden' : ''}`}>{siteConfig.siteName}</span>
    </Link>
  )
}
