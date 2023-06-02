'use client'

import { useEffect, useState, forwardRef, useRef } from 'react'

import cn from 'classnames'

import Logo from '../Logo'
import Nav from '../Nav/Nav'

import Burger from '@/components/Burger/Burger'
import PhoneList from '@/components/PhoneList/PhoneList'
import SignButton from '../SignButton'

const Header = forwardRef<HTMLElement>(() => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.querySelector('.drawer-content')?.addEventListener('scroll', (e) => handleScroll(e))
  }, [])

  const handleScroll = (e: any) => {
    const offset = e.target.scrollTop
    if (offset > 30) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <header
      className={cn('sticky top-0 z-30 flex h-0 w-full justify-center ', {
        scrolled: scrolled,
      })}
    >
      <div className="wrap container">
        <nav className=" my-4 flex items-center justify-between rounded-2xl bg-white px-2 py-1 text-base backdrop-blur-lg transition-all">
          <Burger className="flex-none xl:hidden" />

          <Logo />

          <Nav className="hidden items-center gap-4 xl:flex" />

          <div className="flex gap-4">
            <PhoneList className="mr-4 hidden xl:block" />

            <label className="swap swap-flip mr-4 text-3xl">
              <input type="checkbox" />

              <div className="swap-on">🇺🇸</div>
              <div className="swap-off">🇺🇦</div>
              <svg
                width="12px"
                height="12px"
                className="absolute -right-4 top-1/4 ml-1 hidden  h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </label>
          </div>
        </nav>
      </div>
    </header>
  )
})

export default Header
