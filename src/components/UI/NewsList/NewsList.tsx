import NewsCard from './NewsCard'

import img_post_1 from '@/assets/img/img_1.jpg'
import img_post_2 from '@/assets/img/img_2.jpg'
import img_post_3 from '@/assets/img/img_3.jpg'
import img_post_4 from '@/assets/img/img_4.jpg'

const dataCard = [
  {
    category: 'Новини',
    date: '20.12.2022',
    views: 3,
    title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян — прем'єр",
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
    title: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС',
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
    title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян — прем'єр",
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    imageUrl: img_post_1,
    reviews: 5,
    likes: {
      amount: 3,
      liked: true,
    },
  },
]

const NewsList = () => {
  return (
    <div>
      {dataCard.map((data) => (
        <NewsCard {...data} />
      ))}
    </div>
  )
}

export default NewsList
