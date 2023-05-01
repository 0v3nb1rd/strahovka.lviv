'use client'

import { useEffect, useState, forwardRef, useRef } from 'react'

import cn from 'classnames'

import Logo from '../Logo'
import Nav from '../Nav/Nav'

import Burger from '../UI/Burger/Burger'
import PhoneList from '../UI/PhoneList/PhoneList'

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

          <div className="flex gap-6">
            <PhoneList className="hidden xl:block" />

            <label className="swap swap-flip mr-4 text-3xl">
              <input type="checkbox" />

              <div className="swap-on">🇺🇦</div>
              <div className="swap-off">🇺🇸</div>
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

            {/* <div className="dropdown-end dropdown">
              <div className="btn-ghost btn gap-1 normal-case">
                <Image src="/ukr_flag.svg" alt="flag" width={25} height={15} />
                <svg
                  width="12px"
                  height="12px"
                  className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <div className="dropdown-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
                <ul className="menu menu-compact gap-1 p-3">
                  <li>
                    <button className="active flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="English"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                      />
                      <span className="flex flex-1 justify-between">English </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="Español"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ea-1f1f8.svg"
                      />
                      <span className="flex flex-1 justify-between">Español </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="Français"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1eb-1f1f7.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">Français </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="Indonesia"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ee-1f1e9.svg"
                      />
                      <span className="flex flex-1 justify-between">Indonesia </span>
                    </button>
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="日本語"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ef-1f1f5.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">日本語 </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="한국어"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f0-1f1f7.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">한국어 </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="Português"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f5-1f1f9.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">Português </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="Русский"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f7-1f1fa.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">Русский </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="中文"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1e8-1f1f3.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">中文 </span>
                    </button>{' '}
                  </li>
                  <li>
                    <button className="flex">
                      <img
                        loading="lazy"
                        width="20"
                        height="20"
                        alt="繁體中文"
                        src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f9-1f1fc.svg"
                      />{' '}
                      <span className="flex flex-1 justify-between">繁體中文 </span>
                    </button>{' '}
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  )
})

export default Header
