import { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

// Old versions
// export const metadata = {
//   title: 'Страхові послуги | Strahovka.lviv',
//   description:
//     "Послуги Страхування у Львові та Україні | Автострахування Страхування майна Страхування здоров'я Калькулятор розрахунку ціни тел. 0687678898; 0936555899",
// }

type Post = {
  userId: number
  id: number
  title: string
  body: string
}
// ToDo: replace before Production
export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${1}`)
  const data = (await res.json()) as Post
  return {
    title: data.title,
  }
}

export default function ServiceLayout({ children, params }: RootLayoutProps) {
  return <>{children}</>
}
