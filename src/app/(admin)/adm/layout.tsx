import Providers from '@/components/Providers'
import { DrawerAdm } from './components'
import '@/styles/globals.scss'

type propType = {
  children: React.ReactNode
  modal?: React.ReactNode
}

export const metadata = {
  title: 'Admin panel',
  description: 'This is an admin panel',
}

export default function RootLayout(props: propType) {
  return (
    <html lang="ua">
      <body>
        <Providers>
          <div className="drawer drawer-mobile">
            <input id="drawer-adm" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="drawer-adm" className="btn-primary drawer-button btn lg:hidden">
                Open drawer
              </label>
              {props.children}
            </div>
            <DrawerAdm />
          </div>
        </Providers>
      </body>
    </html>
  )
}
