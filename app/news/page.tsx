import Link from 'next/link'

import {
  BiLike,
  BiShare,
  BiMessageAltDetail,
  BiShow,
  BiInfoCircle,
  BiHome,
  BiBookmark,
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
      <div className="container mx-auto flex justify-between">
        {/* <h1 className="m-10 text-center text-4xl font-bold">News page</h1> */}
        <aside>
          <div className="flex flex-col">
            <a className="btn-ghost btn gap-2 normal-case	" href="/news/">
              <BiHome /> Усі статті
            </a>
            <a className="btn-ghost btn gap-2	normal-case" href="/news/">
              <BiHome /> Новини
            </a>
            <a className="btn-ghost btn gap-2 normal-case	" href="/news/">
              <BiInfoCircle /> Поради
            </a>
          </div>
        </aside>

        <section className="">
          {/* <Link href="/news/info-about-some-historical">Info about some historical</Link> */}
          <article className="w-[640px] rounded-2xl bg-white">
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
                    <span style={{ '--value': 1 } as React.CSSProperties}></span>
                  </span>
                </button>
              </div>
            </div>
          </article>
        </section>

        <section className=""></section>
      </div>
    </main>
  )
}

export default NewsPage
