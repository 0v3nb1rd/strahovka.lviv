import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiPhoneOutgoing } from 'react-icons/hi'

import Logo from '../Logo'
import Nav from '../Nav/Nav'
import logo_ks from '@assets/img/ks.svg'
import logo_life from '@assets/img/lifecell_logo.svg'

const Header = () => {
  return (
    <header className="container">
      <nav className="my-4 flex items-center justify-between rounded-2xl bg-white px-2 py-1 text-base">
        <Logo />

        <Nav />

        <div className="mr-4">
          <a className="link-hover flex items-center gap-2  font-medium" href="tel:380687678898">
            <Image src={logo_ks} width={22} height={22} alt="kyivstar logo" />
            <span className="">(068)767 88 98</span>
          </a>
          <a className="link-hover flex items-center gap-2  font-medium" href="tel:380687678898">
            <Image src={logo_life} width={22} height={2} alt="kyivstar logo" />
            <span className="">(068)767 88 98</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
