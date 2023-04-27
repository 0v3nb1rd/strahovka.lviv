interface RootLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export const metadata = {
  title: 'Страхові послуги | Strahovka.lviv',
  description:
    "Послуги Страхування у Львові та Україні | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел. 0687678898; 0936555899",
}

export default function ServiceLayout({ children, params }: RootLayoutProps) {
  return <>{children}</>
}
