import Image from 'next/image'
import Link from 'next/link'

import banner from '@/assets/img/banner.jpg'
import banner_1 from '@/assets/img/banner_1.jpg'
import banner_2 from '@/assets/img/banner_2.jpg'

export default function Banner() {
  return (
    <div className="banner ">
      <Image
        src={banner}
        alt="Страхування Львів — автоцивілка, зелена карта, КАСКО"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1140px) 90vw, 1140px"
        className="object-cover object-[0_60%]"
      />
      {/* <Image src={banner_1} fill alt="main banner" priority /> */}
      {/* <Image src={banner_2} fill alt="main banner" priority /> */}
    </div>
  )
}
