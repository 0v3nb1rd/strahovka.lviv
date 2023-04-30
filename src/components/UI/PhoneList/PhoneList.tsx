import Image from 'next/image'

import logo_ks from '@/assets/img/ks.svg'
import logo_life from '@/assets/img/lifecell_logo.svg'
import classNames from 'classnames'
const PhoneList = ({ ...rest }) => {
  return (
    <div {...rest}>
      <a className="link-hover flex items-center gap-2  font-medium" href="tel:380687678898">
        <Image src={logo_ks} width={22} height={22} className="h-[22px] w-[22px]" alt="kyivStar logo" />
        <span className="">(068)767 88 98</span>
      </a>
      <a className="link-hover flex items-center gap-2  font-medium" href="tel:380687678898">
        <Image src={logo_life} width={22} height={22} className="h-[22px] w-[22px]" alt="lifeCell logo" />
        <span className="">(068)767 88 98</span>
      </a>
    </div>
  )
}

export default PhoneList
