// import { Inter } from 'next/font/google'
import Image from 'next/image'

import Banner from '@/components/Banner'
import CtaBlock from '@/components/CtaBlock'
import FeaturesSection from '@/components/Features'
import PromoSection from '@/components/PromoSection'
import ServiceCards from '@/components/ServiceCards/ServiceCards'

// const inter = Inter({ subsets: ['latin'] })
import img_post_1 from '@/assets/img/img_1.jpg'
import img_post_2 from '@/assets/img/img_2.jpg'
import img_post_3 from '@/assets/img/img_3.jpg'
import img_post_4 from '@/assets/img/img_4.jpg'
import Badge from '@/components/UI/Badge'
import Link from 'next/link'
import NewsList from '@/components/UI/NewsList/NewsList'

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

const HomePage = () => {
  return (
    <main className="main pt-32">
      <section>
        <div className="container">
          <Banner />

          <div className="-mt-24">
            <div className="container">
              <ServiceCards />
            </div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <div className="md:px-12">
            <div className="mx-auto w-full  rounded-2xl ">
              <img src="/icons/info-yellow.svg" className="m-auto mb-8 h-10 w-10" />
              <p className="m-auto w-full text-center text-lg text-gray-600 md:w-2/3 md:text-3xl">
                <span className="text-4xl font-bold text-neutral">“</span>
                Поліс <strong>ОСАЦВ</strong> не захищає Ваш автомобіль. Він захищає інших учасників дорожнього руху,
                яким може бути завдано шкоди, якщо ви стали винуватцем ДТП.
                <span className="text-4xl font-bold text-neutral">”</span>
              </p>
              <div className="mt-8 flex items-center justify-center">
                <div className="ml-2 flex items-center justify-center">
                  <button className="btn-outline btn">Замовити автоцивілку</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <FeaturesSection />
      </section>

      <section className="my-20">
        <div className="container">
          <div className="divider ">
            <img src="/icons/green-card.svg" className=" h-10 w-10" />
          </div>
          <div className="md:p-12">
            <div className="mx-auto w-full  rounded-2xl ">
              <p className="m-auto w-full text-center text-lg text-gray-600 md:w-2/3 md:text-3xl">
                <span className="text-4xl font-bold text-neutral">“</span>
                <strong>Зелена карта</strong> — це поліс обов’язкового страхування цивільної відповідальності
                автовласників, які в’їжджають на своєму авто на територію країн-учасниць міжнародної системи Зелена
                карта
                <span className="text-4xl font-bold text-neutral">”</span>
              </p>
              <div className="mt-8 flex items-center justify-center">
                <div className="ml-2 flex items-center justify-center">
                  <button className="btn-outline btn">Замовити Зелену карту</button>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </section>

      <section className="my-20">
        <div className="container space-y-8">
          <div className="flex items-end justify-between">
            <div className="">
              <Badge variant="secondary" linked>
                Останні статті
              </Badge>
              <h2 className="mt-4 pl-4 text-2xl font-bold text-gray-900 md:text-4xl">
                Тут ви можете ознайомитись з новинами, <br className="lg:block" /> та порадами
              </h2>
            </div>
            <Link href="/news" className="btn">
              Усі новини
            </Link>
          </div>

          <div className="mt-16">
            <NewsList maxLength={3} newsData={newsData} />
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <div className="divider ">
            <img src="/icons/safety.svg" className=" h-10 w-10" />
          </div>
          <div className="md:p-12">
            <div className="mx-auto w-full  rounded-2xl ">
              <p className="m-auto w-full text-center text-lg text-gray-600 md:w-2/3 md:text-3xl">
                <span className="text-4xl font-bold text-neutral">“</span>
                Поліс <strong>КАСКО</strong> захищає Ваш автомобіль практично від будь-яких неприємностей, які можуть з
                ним статися на стоянці або в дорозі. Усі непередбачені витрати, пов’язані з Вашим авто, він зводить
                практично до нуля.
                <span className="text-4xl font-bold text-neutral">”</span>
              </p>
              <div className="mt-8 flex items-center justify-center">
                <div className="ml-2 flex items-center justify-center">
                  <button className="btn-outline btn">Замовити КАСКО</button>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </section>

      <section className="my-20">
        <div className="container">
          <div className="flex justify-center">
            <CtaBlock />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
