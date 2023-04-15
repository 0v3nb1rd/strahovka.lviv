import Link from 'next/link'

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

import img_post_1 from '@assets/img/img_1.jpg'
import img_post_2 from '@assets/img/img_2.jpg'
import img_post_3 from '@assets/img/img_3.jpg'
import img_post_4 from '@assets/img/img_4.jpg'
import Image from 'next/image'

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
            {/* <Link href="/news/info-about-some-historical">Info about some historical</Link> */}
            <article className="rounded-2xl bg-white">
              <div className="mb-7">
                <div className="px-5 py-4">
                  <ul className="header mb-3 flex gap-6">
                    <li className="">
                      <a href="#" className="badge-secondary badge badge-lg hover:scale-110 hover:shadow-inner">
                        Новини
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <BiTimeFive />
                      <span className="countdown text-base">10.12.2022</span>
                    </li>
                    <li className="ml-auto flex items-center gap-2">
                      <BiShow fontSize={22} />
                      <span className="countdown w-5 text-base">
                        <span style={{ '--value': 3 } as React.CSSProperties}></span>
                      </span>
                    </li>
                  </ul>
                  <h2 className="text-2xl font-medium">
                    В Україні в 2016 році потрібно ввести медстрахування всіх громадян — прем’єр
                  </h2>
                </div>

                <figure className="h- relative h-[360px] w-full">
                  <Image src={img_post_1} alt="photo art 1" fill className="object-cover" />
                </figure>

                <div className="flex gap-10 px-5 py-4">
                  <button className="group flex items-center gap-2 transition">
                    <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 1 } as React.CSSProperties}></span>
                    </span>
                  </button>
                  <button className="group">
                    <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group">
                    <BiShare fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group ml-auto flex items-center gap-2">
                    <BiLike fontSize={22} className="text-red-500 transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 2 } as React.CSSProperties}></span>
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white">
              <div className="mb-7">
                <div className="px-5 py-4">
                  <ul className="header mb-3 flex gap-6">
                    <li className="">
                      <a href="#" className="badge-secondary badge badge-lg hover:scale-110 hover:shadow-inner">
                        Новини
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <BiTimeFive />
                      <span className="countdown text-base">10.12.2022</span>
                    </li>
                    <li className="ml-auto flex items-center gap-2">
                      <BiShow fontSize={22} />
                      <span className="countdown w-5 text-base">
                        <span style={{ '--value': 1 } as React.CSSProperties}></span>
                      </span>
                    </li>
                  </ul>
                  <h2 className="text-2xl font-medium">
                    Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року
                  </h2>
                </div>

                <figure className="h- relative h-[360px] w-full">
                  <Image src={img_post_2} alt="photo art 1" fill className="object-cover" />
                </figure>

                <div className="flex gap-10 px-5 py-4">
                  <button className="group flex items-center gap-2 transition">
                    <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 1 } as React.CSSProperties}></span>
                    </span>
                  </button>
                  <button className="group">
                    <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group">
                    <BiShare fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group ml-auto flex items-center gap-2">
                    <BiLike fontSize={22} className=" transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 1 } as React.CSSProperties}></span>
                    </span>
                  </button>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white">
              <div className="mb-7">
                <div className="px-5 py-4">
                  <ul className="header mb-3 flex gap-6">
                    <li className="">
                      <a href="#" className="badge-secondary badge badge-lg hover:scale-110 hover:shadow-inner">
                        Новини
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <BiTimeFive />
                      <span className="countdown text-base">10.12.2022</span>
                    </li>
                    <li className="ml-auto flex items-center gap-2">
                      <BiShow fontSize={22} />
                      <span className="countdown w-5 text-base">
                        <span style={{ '--value': 1 } as React.CSSProperties}></span>
                      </span>
                    </li>
                  </ul>
                  <h2 className="text-2xl font-medium">Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС</h2>
                </div>

                <figure className="h- relative h-[360px] w-full">
                  <Image src={img_post_3} alt="photo art 1" fill className="object-cover" />
                </figure>

                <div className="flex gap-10 px-5 py-4">
                  <button className="group flex items-center gap-2 transition">
                    <BiMessageAltDetail fontSize={22} className="transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 1 } as React.CSSProperties}></span>
                    </span>
                  </button>
                  <button className="group">
                    <BiBookmark fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group">
                    <BiShare fontSize={22} className="transition group-hover:scale-110" />
                  </button>
                  <button className="group ml-auto flex items-center gap-2">
                    <BiLike fontSize={22} className=" transition group-hover:scale-110" />
                    <span className="countdown w-5 text-base">
                      <span style={{ '--value': 1 } as React.CSSProperties}></span>
                    </span>
                  </button>
                </div>
              </div>
            </article>
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
