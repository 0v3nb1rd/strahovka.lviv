import Link from 'next/link'
import prisma from '@/lib/prisma'

import Banner from '@/components/Banner'
import CtaBlock from '@/components/Forms/CtaBlock'
import FeaturesSection from '@/components/Features'
import PromoSection from '@/components/PromoSection'
import ServiceCards from '@/components/ServiceCards/ServiceCards'
import Badge from '@/components/Badge'
import NewsList from '@/components/NewsList/NewsList'

import { Post } from '@prisma/client'
import { Suspense } from 'react'

const fetchLastPost = async (count: number): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    take: count,
    orderBy: {
      created_at: 'desc',
    },
  })
  return res
}

const loader = `<div className="loader">
    <div className="spinner"></div>
  </div>`

export default async function HomePage() {
  const lastPosts = await fetchLastPost(3)

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
                  <Link href="/services/car-insurance#service" scroll={false} className="btn-outline btn">
                    Замовити автоцивілку
                  </Link>
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
                  <Link href="/services/car-insurance#service" scroll={false} className="btn-outline btn">
                    Замовити Зелену карту
                  </Link>
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
            <Link href="/blog" className="btn">
              Усі статті
            </Link>
          </div>

          <div className="mt-16">
            <Suspense fallback={loader}>
              <NewsList maxLength={3} newsData={lastPosts} />
            </Suspense>
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
                  <Link href="/services/car-insurance#service" scroll={false} className="btn-outline btn">
                    Замовити КАСКО
                  </Link>
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
