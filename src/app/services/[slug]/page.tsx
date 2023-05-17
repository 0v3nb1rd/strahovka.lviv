import { Service_category } from '@prisma/client'

import prisma from '@/lib/prisma'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

const fetchServiceBySlug = async (slug: string): Promise<Service_category | null> => {
  const res = await prisma.service_category.findFirst({ where: { slug: slug } })

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function NewPage({ params }: Props) {
  const service = await fetchServiceBySlug(params.slug)

  return (
    <section className="relative mx-10 rounded-2xl bg-white p-14 pb-20 shadow-md">
      <Link
        href="/services"
        className="btn-outline btn-circle btn absolute right-4 top-4 text-primary hover:border-transparent hover:bg-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>
      <div className="flex flex-col gap-8">
        <div className="title mx-auto max-w-2xl">
          <div className="flex flex-col items-center">
            <span className="badge badge-secondary badge-lg mb-3">{service?.category_ua}</span>
            <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
              {service?.title}
            </h1>
          </div>
        </div>

        <div className="relative h-[480px] overflow-hidden rounded-2xl">
          <Image src={`${service?.image_url}`} className="object-cover" fill alt={`${service?.title}`} />
        </div>

        <div
          className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg font-semibold text-black/60"
          dangerouslySetInnerHTML={{ __html: service?.full_text || '' }}
        >
          {/* <p className="pl-14 text-xl">Якщо Ви початківець, новачок у страхуванні:</p>
          <p className="pl-14 text-xl">
            … то ключами до успіху для Вас повинні стати слова: «Хочу», «Вірю», «Знаю» і «Вмію».
          </p>
          <p className="pl-14 text-xl">У свою чергу, ми пропонуємо Вам:</p>
          <ul className="list-line">
            <li>
              «Школу страхування» У ній кожен, хто бажає знайти себе у страхуванні, зможе пройти курс навчання і
              оволодіти відповідними навичками. Основною перевагою Школи є те, що навчання в ній абсолютно безкоштовно,
            </li>
            <li>якісні страхові продукти, які подобаються Клієнтам,</li>
            <li>сервіс та врегулювання, за які не соромно перед Клієнтами,</li>
            <li>прозорі умови взаємодії та співробітництва з Вами,</li>
            <li>привабливу винагороду, яка залежить від результату Вашої роботи,</li>
            <li>вибір умов роботи — гнучкий графік або зарахування в штат Компанії на постійній основі.</li>
            <li>
              Якщо Ви вірите в свої сили, готові поповнити свій багаж новими знаннями та реалізувати отримані навички на
              практиці — Вам гарантовано успіх! Ви станете матеріально забезпеченою людиною та отримаєте всі можливості
              для кар’єрного зростання. Пишіть: Наші контакти
            </li>
            <li>
              В Нас — структурована, чітко вибудувана система навчання теоретичним знанням та практичним навичкам
              роботи. У нас створена система навчання, при якій за кожним починаючим фахівцем закріплений досвідчений
              наставник. Він не тільки допомагає на початкових етапах роботи, а й ділиться досвідом, навчає практичним
              навичкам, допомагає організувати роботу.
            </li>
          </ul>
          <b className="pl-14">Раді співпраці!</b> */}
        </div>
      </div>
    </section>
  )
}
