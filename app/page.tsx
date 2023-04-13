// import { Inter } from 'next/font/google'

import Banner from '@/components/Banner'
import CtaBlock from '@/components/CtaBlock'
import FeaturesSection from '@/components/Features'
import PromoSection from '@/components/PromoSection'
import ServiceCards from '@/components/ServiceCards/ServiceCards'
import Image from 'next/image'

// const inter = Inter({ subsets: ['latin'] })
import img_post_1 from '@assets/img/img_1.jpg'
import img_post_2 from '@assets/img/img_2.jpg'
import img_post_3 from '@assets/img/img_3.jpg'
import img_post_4 from '@assets/img/img_4.jpg'

const HomePage = () => {
  return (
    <main className="main">
      <section className="my-2">
        <div className="container">
          {/* <h1 className="m-10 text-center text-4xl font-bold">Автоцивілка</h1> */}
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
              <span className="bg-yellow-100 px-2 text-lg font-semibold text-gray-600">Останні новини</span>
              <h2 className="mt-4 pl-4 text-2xl font-bold text-gray-900 md:text-4xl">
                Тут ви можете ознайомитись з новинами, <br className="lg:block" /> та порадами
              </h2>
            </div>
            <a href="/" className=" btn">
              Усі новини
            </a>
          </div>

          <ul className="mt-16 grid min-h-[320px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a
                href="/1stmu_ee5/www/novyny/nevidkladna-dopomoga-v-stanah-zagrozy-zhyttja.html"
                className="relative flex h-full overflow-hidden rounded-2xl bg-white/40 shadow transition-all delay-75 duration-100 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                <Image src={img_post_1} alt="blog image" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 right-0 p-2 font-semibold text-black lg:p-6 lg:text-base xl:text-xl">
                  <sub className=" absolute -inset-6 bottom-0 block bg-gradient-to-t from-white via-white/80 to-white/0 "></sub>
                  <h2 className="relative  line-clamp-3 text-xl font-semibold leading-5 transition-colors">
                    В Україні в 2016 році потрібно ввести медстрахування всіх громадян — прем’єр
                  </h2>
                </div>
              </a>
            </li>

            <li>
              <a
                href="/1stmu_ee5/www/novyny/nevidkladna-dopomoga-v-stanah-zagrozy-zhyttja.html"
                className="relative flex h-full overflow-hidden rounded-2xl bg-white/40 shadow transition-all delay-75 duration-100 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                <Image src={img_post_2} alt="blog image" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 right-0 p-2 font-semibold text-black lg:p-6 lg:text-base xl:text-xl">
                  <sub className=" absolute -inset-6 bottom-0 block bg-gradient-to-t from-white via-white/80 to-white/0 "></sub>
                  <h2 className="relative line-clamp-3 text-xl font-semibold leading-5 transition-colors">
                    Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року
                  </h2>
                </div>
              </a>
            </li>

            <li>
              <a
                href="/1stmu_ee5/www/novyny/nevidkladna-dopomoga-v-stanah-zagrozy-zhyttja.html"
                className="relative flex h-full overflow-hidden rounded-2xl bg-white/40 shadow transition-all delay-75 duration-100 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                <Image src={img_post_3} alt="blog image" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 right-0 p-2 font-semibold text-black lg:p-6 lg:text-base xl:text-xl">
                  <sub className=" absolute -inset-6 bottom-0 block bg-gradient-to-t from-white via-white/80 to-white/0 "></sub>
                  <h2 className="relative  line-clamp-3 text-xl font-semibold leading-5 transition-colors">
                    Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС{' '}
                  </h2>
                </div>
              </a>
            </li>

            {/* <li>
              <a
                href="/1stmu_ee5/www/novyny/nevidkladna-dopomoga-v-stanah-zagrozy-zhyttja.html"
                className="relative flex h-full overflow-hidden rounded-2xl bg-white/40 shadow transition-all delay-75 duration-100 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                <Image src={img_post_4} alt="blog image" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-0 left-0 right-0 p-2 font-semibold text-black lg:p-6 lg:text-base xl:text-xl">
                  <sub className=" absolute -inset-10 block bg-gradient-to-t from-white/80 via-white/90 to-white/0 "></sub>
                  <h2 className="relative  line-clamp-3 text-lg font-semibold leading-5 transition-colors">
                    Хто гірше всіх платить по Автоцивілці / ОСАЦВ
                  </h2>
                </div>
              </a>
            </li> */}
          </ul>
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
          {/* <div className="md:px-12">
            <PromoSection />
          </div> */}
          <div className="flex justify-center">
            <CtaBlock />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
