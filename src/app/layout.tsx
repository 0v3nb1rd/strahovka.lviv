import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'

import './globals.scss'

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
      <body className="relative flex min-h-screen min-w-[320px] flex-col overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
