import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import DrawerSide from '@/components/Drawer/DrawerSide'
import Modal from '@/components/Modal/Modal'

import './globals.scss'
import ModalForm from '@/components/Forms/ModalForm'
import Logo from '@/components/Logo'
import Badge from '@/components/UI/Badge'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'Страхування у Львові та Україні від кращих компаній',
  description:
    "Послуги Страхування у Львові та Україні | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел 068 767 88 98; 093 655 58 99",
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ua">
      <body>
        <div className="drawer absolute">
          <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Header />
            {children}
            <Footer />
          </div>

          <DrawerSide />
        </div>

        <Modal variant="sm" title="Зелена карта" />
      </body>
    </html>
  )
}

export default RootLayout
