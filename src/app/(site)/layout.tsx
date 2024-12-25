import { Header, Footer, Drawer } from '@/components'

import '@/styles/globals.scss'
import React from 'react'

type propType = {
  children: React.ReactNode
  modal?: React.ReactNode
}

export const metadata = {
  title: "Страхування в Україні | Страхування Львів | Страхування від кращих компаній",
  description:
    "Послуги Страхування Львів та Україна | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел 068 767 88 98; 063 744 12 89",
  appleWebApp: {
    title: 'Strahovka',
    statusBarStyle: 'default',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    apple: [
      { url: '/favicons/apple-icon.png' },
    ],
  },
}

export default function RootLayout(props: propType) {
  return (
    <html lang={`ua`}>
      <body>
        <div className="drawer absolute">
          <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
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
