import { Header, Footer, Drawer } from '@/components'

import '@/styles/globals.scss'

type propType = {
  children: React.ReactNode
  modal?: React.ReactNode
}

export const metadata = {
  title: 'Страхування у Львові та Україні від кращих компаній',
  description:
    "Послуги Страхування у Львові та Україні | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел 068 767 88 98; 093 655 58 99",
}

export default function RootLayout(props: propType) {
  return (
    <html lang="ua">
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
