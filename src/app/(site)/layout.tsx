import React from 'react'
import type { Metadata } from 'next'
import { Header, Footer, Drawer } from '@/components'

import '@/styles/globals.scss'

type propType = {
  children: React.ReactNode
  modal?: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL('https://strahovka.lviv.ua'),
  title: 'Страхування в Україні | Страхування Львів | Страхування від кращих компаній',
  description:
    "Послуги Страхування Львів та Україна | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел 068 767 88 98; 063 744 12 89",
  other: {
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    apple: [{ url: '/favicons/apple-icon.png' }],
  },
}

export default function RootLayout(props: propType) {
  return (
    <html lang={`uk`}>
      <body>
        <div className="drawer absolute">
          <input
            id="drawer-menu"
            type="checkbox"
            className="drawer-toggle"
            aria-label="Відкрити або закрити меню навігації"
          />
          <div className="drawer-content">
            <Header />
            {props.children}
            <Footer />
          </div>

          <Drawer />
        </div>
      </body>
    </html>
  )
}
