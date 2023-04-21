import Image from 'next/image'
import { BiLike, BiShare, BiMessageAltDetail, BiShow, BiBookmark, BiTimeFive } from 'react-icons/Bi'

import Badge from '@/components/UI/Badge'

interface paramsProps {
  params: {
    slug: string
  }
}

const fetchServices = async () => {
  const resp = await fetch(`${process.env.BASE_FETCH_URL}/api/services`)
  const servicesData = await resp.json()
  return servicesData
}

const NewPage = async ({ params: { slug } }: paramsProps) => {
  const servicesData = await fetchServices()

  const { category_ua, title, full_text, img_url }: any = servicesData.find((x: any) => x.slug === slug)

  return (
    <main className="main main--services">
      <div className="container mx-auto">
        <section className="mx-10 mb-14 mt-2 rounded-2xl  bg-white p-14 pb-20 shadow-md">
          <div className="flex flex-col gap-16">
            <div className="title mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="badge-secondary badge badge-lg mb-3">{category_ua}</span>
                <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                  {title}
                </h1>
                <div
                  className="text-center text-lg font-semibold text-black/60"
                  dangerouslySetInnerHTML={{ __html: full_text }}
                />
              </div>
            </div>

            <div className="relative h-[480px] overflow-hidden rounded-2xl">
              <Image src={img_url} className="object-cover" fill alt={title} />
            </div>

            <div className="mx-auto flex max-w-[840px] flex-col gap-4 text-lg">
              <p className="pl-14 text-xl">Якщо Ви початківець, новачок у страхуванні:</p>
              <p className="pl-14 text-xl">
                … то ключами до успіху для Вас повинні стати слова: «Хочу», «Вірю», «Знаю» і «Вмію».
              </p>
              <p className="pl-14 text-xl">У свою чергу, ми пропонуємо Вам:</p>
              <ul className="list-line">
                <li>
                  «Школу страхування» У ній кожен, хто бажає знайти себе у страхуванні, зможе пройти курс навчання і
                  оволодіти відповідними навичками. Основною перевагою Школи є те, що навчання в ній абсолютно
                  безкоштовно,
                </li>
                <li>якісні страхові продукти, які подобаються Клієнтам,</li>
                <li>сервіс та врегулювання, за які не соромно перед Клієнтами,</li>
                <li>прозорі умови взаємодії та співробітництва з Вами,</li>
                <li>привабливу винагороду, яка залежить від результату Вашої роботи,</li>
                <li>вибір умов роботи — гнучкий графік або зарахування в штат Компанії на постійній основі.</li>
                <li>
                  Якщо Ви вірите в свої сили, готові поповнити свій багаж новими знаннями та реалізувати отримані
                  навички на практиці — Вам гарантовано успіх! Ви станете матеріально забезпеченою людиною та отримаєте
                  всі можливості для кар’єрного зростання. Пишіть: Наші контакти
                </li>
                <li>
                  В Нас — структурована, чітко вибудувана система навчання теоретичним знанням та практичним навичкам
                  роботи. У нас створена система навчання, при якій за кожним починаючим фахівцем закріплений
                  досвідчений наставник. Він не тільки допомагає на початкових етапах роботи, а й ділиться досвідом,
                  навчає практичним навичкам, допомагає організувати роботу.
                </li>
              </ul>
              <b className="pl-14">Раді співпраці!</b>
            </div>

            {/* <div className="flex justify-around">
              <ul className="title flex w-[40%] flex-col gap-12">
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl  bg-primary text-white shadow-2xl shadow-primary">
                      <BiPhoneCall fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="font-medium text-black/40">Телефон:</span>
                      <a className=" font-bold leading-6">+38(068)767 88 98</a>
                      <a className=" font-bold leading-6">+38(093)655 58 99</a>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#80ed99] shadow-2xl shadow-[#80ed99]">
                      <BiEnvelope fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="font-medium text-black/40">Email:</span>
                      <a className="text-lg font-bold leading-6">strahovka.lviv.ua@gmail.com</a>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-secondary shadow-2xl shadow-secondary  ">
                      <BiMap fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="text-lg font-medium text-black/40">Адрес:</span>
                      <span className="text-lg font-bold leading-6">
                        м.Львів, 79000 <br /> пр.Шевченка
                      </span>
                    </span>
                  </div>
                </li>
              </ul>

              <form className="w-[40%]">
                <div className="flex flex-col gap-6">
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="name"
                      className="text-md peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                      Ваше ім'я *
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input
                      type="text"
                      name="tel"
                      className="text-md peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                      Телефон *
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input
                      type="text"
                      name="email"
                      className="text-md peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                      Email
                    </label>
                  </div>

                  <div className="relative z-0">
                    <textarea
                      name="message"
                      className="text-md peer block	h-24 w-full resize-none appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute top-3 -z-10  origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                      Ваше повідомлення *
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn-secondary btn-wide btn mt-8">
                  Відправити
                </button>
              </form>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  )
}

export default NewPage
