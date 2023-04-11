import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BsTelephoneOutbound from 'react-icons/bs'
import { HiPhoneOutgoing } from 'react-icons/hi'
import Logo from '../Logo'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className="container">
      <nav className="my-[0.6rem] flex items-center justify-between rounded-2xl bg-white px-[0.6rem]  text-base">
        <Logo />

        <Nav />

        <div>
          <a className="btn-outline btn text-base" href="tel:380687678898">
            <HiPhoneOutgoing fontSize="20px" />
            <span className="ml-2">(068)767 88 98</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
