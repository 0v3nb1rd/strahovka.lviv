import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
