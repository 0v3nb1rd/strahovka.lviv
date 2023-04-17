import Image from 'next/image'
import Link from 'next/link'

import banner from '@assets/img/banner.jpg'
import banner_1 from '@assets/img/banner_1.jpg'
import banner_2 from '@assets/img/banner_2.jpg'

const Banner = () => {
  return (
    <div className="banner ">
      {/* <Image src={banner} alt="main banner" priority /> */}
      <Image src={banner_1} fill alt="main banner" priority />
      {/* <Image src={banner_2} fill alt="main banner" priority /> */}
    </div>
  )
}

export default Banner
