import { BiInfoCircle, BiNews } from 'react-icons/bi'

interface Props {
  id: string
  label: string
  path: string
  icon?: any
}

export const mainRoute: Props[] = [
  {
    id: '1',
    label: 'Новини',
    path: '/blog',
  },
  {
    id: '2',
    label: 'Послуги',
    path: '/services',
  },
  {
    id: '3',
    label: 'Співпраця',
    path: '/cooperation',
  },
  {
    id: '4',
    label: 'Контакти',
    path: '/contacts',
  },
]

export const blogRoute: Props[] = [
  {
    id: '2',
    label: 'Новини',
    path: '/blog/news',
    icon: BiNews,
  },
  {
    id: '3',
    label: 'Поради',
    path: '/blog/tips',
    icon: BiInfoCircle,
  },
]
