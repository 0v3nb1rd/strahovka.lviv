import Image from 'next/image'
import siteConfig from '@/config/site'
import { phoneMask } from '@/helpers'

import logo_ks from '@/assets/img/ks.svg'
import logo_life from '@/assets/img/lifecell_logo.svg'

export const PhoneList = ({ ...rest }) => {
  return (
    <div {...rest}>
      <a className="link-hover flex items-center gap-2 font-medium" href={`tel:${siteConfig.contacts.phones[0]}`}>
        <Image src={logo_ks} width={22} height={22} className="h-[22px] w-[22px]" alt="kyivStar logo" />
        <span>{phoneMask(siteConfig.contacts.phones[0])}</span>
      </a>
      {/* <a className="flex items-center gap-2 font-medium link-hover" href="tel:380687678898">
        <Image src={logo_life} width={22} height={22} className="h-[22px] w-[22px]" alt="lifeCell logo" />
        <span className="">(068)767 88 98</span>
      </a> */}
    </div>
  )
}

export default PhoneList
