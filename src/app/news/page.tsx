import Link from 'next/link'
import Image from 'next/image'

import {
  BiLike,
  BiShare,
  BiMessageAltDetail,
  BiShow,
  BiInfoCircle,
  BiHome,
  BiBookmark,
  BiNews,
  BiTimeFive,
} from 'react-icons/Bi'

import Badge from '@/components/UI/Badge'
import NewsList from '@/components/UI/NewsList/NewsList'

import img_post_1 from '@/assets/img/img_1.jpg'
import img_post_2 from '@/assets/img/img_2.jpg'
import img_post_3 from '@/assets/img/img_3.jpg'
import img_post_4 from '@/assets/img/img_4.jpg'

const newsData = [
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

const NewsPage = () => {
  return (
    <main className="main main--news-cat">
      <div className="container mx-auto">
        <div className="my-2 flex justify-between">
          <aside className="w-[240px]">
            <div className="flex flex-col gap-2">
              <a className="btn-ghost btn-active btn-block btn justify-start gap-2 text-base normal-case" href="/news/">
                <BiHome fontSize={24} /> Усі статті
              </a>
              <a className="btn-ghost btn-block btn justify-start gap-2 text-base	normal-case" href="/news/">
                <BiNews fontSize={24} /> Новини
              </a>
              <a className="btn-ghost btn-block btn justify-start gap-2 text-base normal-case	" href="/news/">
                <BiInfoCircle fontSize={24} /> Поради
              </a>
            </div>
          </aside>

          <section className="mx-3 w-[640px]">
            <NewsList newsData={newsData} />
          </section>

          <section className="w-[320px]">
            <div className="overflow-hidden rounded-2xl bg-white p-5">
              <h2 className="text-lg font-bold">Популярні статті:</h2>
              <ul>
                <li>
                  <a href="#" className="group mt-4 flex items-center justify-between gap-2">
                    <div className="flex flex-1 flex-col gap-1">
                      <span className="text-xs text-neutral-700">Новини</span>
                      <h3 className="line-clamp-3 text-sm font-semibold transition group-hover:text-primary group-hover:underline">
                        В Україні в 2016 році потрібно ввести медстрахування всіх громадян — прем’єр
                      </h3>
                    </div>
                    <figure className="relative h-14 w-10 overflow-hidden rounded-lg transition  group-hover:shadow">
                      <Image src={img_post_1} alt="photo art 1" fill className="object-cover" />
                    </figure>
                  </a>
                </li>

                <li>
                  <a href="#" className="group mt-4 flex items-center justify-between gap-2">
                    <div className="flex flex-1 flex-col gap-1">
                      <span className="text-xs text-neutral-700">Новини</span>
                      <h3 className="line-clamp-3 text-sm font-semibold transition group-hover:text-primary group-hover:underline">
                        Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року
                      </h3>
                    </div>
                    <figure className="relative h-14 w-10 overflow-hidden rounded-lg transition  group-hover:shadow">
                      <Image src={img_post_2} alt="photo art 1" fill className="object-cover" />
                    </figure>
                  </a>
                </li>

                <li>
                  <a href="#" className="group mt-4 flex items-center justify-between gap-2">
                    <div className="flex flex-1 flex-col gap-1">
                      <span className="text-xs text-neutral-700">Новини</span>
                      <h3 className="line-clamp-3 text-sm font-semibold transition group-hover:text-primary group-hover:underline">
                        Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС
                      </h3>
                    </div>
                    <figure className="relative h-14 w-10 overflow-hidden rounded-lg transition  group-hover:shadow">
                      <Image src={img_post_3} alt="photo art 1" fill className="object-cover" />
                    </figure>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default NewsPage
