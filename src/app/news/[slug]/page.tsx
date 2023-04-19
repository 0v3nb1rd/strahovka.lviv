// const inter = Inter({ subsets: ['latin'] })
import img_post_1 from '@/assets/img/img_1.jpg'
import img_post_2 from '@/assets/img/img_2.jpg'
import img_post_3 from '@/assets/img/img_3.jpg'
import img_post_4 from '@/assets/img/img_4.jpg'
import Badge from '@/components/UI/Badge'
import Link from 'next/link'
import NewsList from '@/components/UI/NewsList/NewsList'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

const newsData = [
  {
    category: 'Новини',
    date: '20.12.2022',
    views: 3,
    title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єр",
    slug: 'v-ukrayini-v-2016-rotsi-potribno-vvesti-medstrakhuvannya-vsikh-gromadyan-premier',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_1,
    reviews: 5,
    likes: {
      amount: 3,
      liked: true,
    },
  },
  {
    category: 'Новини',
    date: '07.10.2022',
    views: 0,
    title: 'Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року',
    slug: 'avtomobilistam-rosiyi-dovedetsya-zaminiti-vsi-polisi-osatsv-z-1-lipnya-2016-roku',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_2,
    reviews: 0,
    likes: {
      amount: 0,
      liked: false,
    },
  },
  {
    category: 'Новини',
    date: '04.04.2022',
    views: 0,
    title: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС',
    slug: 'limiti-po-osatsv-v-ukrayini-budut-privedeni-do-standartiv-ies',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_3,
    reviews: 0,
    likes: {
      amount: 0,
      liked: false,
    },
  },
  {
    category: 'Новини',
    date: '18.02.2022',
    views: 1,
    title: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄСC',
    slug: 'iti-po-osatsv-v-ukrayini-budut-privedeni-do-standartiv-iesc',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_4,
    reviews: 0,
    likes: {
      amount: 0,
      liked: false,
    },
  },
  {
    category: 'Новини',
    date: '10.12.2022',
    views: 3,
    title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єрр",
    slug: 'v-ukrayini-v-2016-rotsi-potribno-vvesti-medstrakhuvannya-vsikh-gromadyan-premierr',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_1,
    reviews: 5,
    likes: {
      amount: 3,
      liked: true,
    },
  },
]

interface paramsProps {
  params: {
    slug: string
  }
}

const News: React.FC<paramsProps> = ({ params: { slug } }) => {
  const { category, date, title, views, description, imageUrl, reviews, likes, maxLength }: any = newsData.find(
    (x) => x.slug === slug
  )

  return (
    <main className="main main--news-art">
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-4xl font-bold">New page</h1>
        <div className="flex justify-between">
          <span>{date}</span>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <article>{title}</article>
        <Image src={imageUrl} alt={title} />
        <p>{description}</p>
      </div>
    </main>
  )
}

export default News
