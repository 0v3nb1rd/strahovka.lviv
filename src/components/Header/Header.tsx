'use client'

import { useEffect, useState, forwardRef } from 'react'

import cn from 'classnames'

import { Logo } from '../Logo'
import Nav from '../Nav'
import { Burger } from '../Burger'

import PhoneList from '@/components/PhoneList'

import { Lang } from './Lang'

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
        <nav className="my-4 flex items-center justify-between rounded-2xl bg-white px-2 py-1 text-base  backdrop-blur-lg transition-all">
          <Burger className="flex-none xl:hidden" />

          <Logo />

          <Nav className="hidden items-center gap-4 xl:flex" />

          <div className="flex gap-4">
            <PhoneList className="mr-4 hidden xl:block" />

            {/* <Lang /> */}
          </div>
        </nav>
      </div>
    </header>
  )
})

export default Header
