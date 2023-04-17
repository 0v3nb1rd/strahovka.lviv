import { BiPhoneCall, BiEnvelope, BiMap } from 'react-icons/Bi'

import CtaBlock from '@/components/CtaBlock'
import Faq from '@/components/Faq'
import Team from '@/components/Team'

const ContactsPage = () => {
  return (
    <main className="main main--about">
      <div className="container mx-auto">
        <section className="mx-10 mb-14 mt-2 rounded-2xl  bg-white p-14  shadow-md">
          <div className="flex flex-col gap-16">
            <div className="title mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="badge badge-secondary badge-lg mb-3">Контакти</span>
                <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                  Зв'яжіться з нами
                </h1>
                <p className="text-center text-lg font-semibold text-black/60">
                  Ми готові допомогти вам з автомобільним страхуванням. Зв'яжіться з нами за телефоном, електронною
                  поштою або через форму на сайті.
                </p>
              </div>
            </div>

            <div className="flex justify-around">
              <ul className="title flex w-[40%] flex-col gap-12">
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl  bg-primary text-white shadow-2xl shadow-primary/50">
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
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#80ed99] shadow-2xl shadow-[#80ed99]/80">
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
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-secondary shadow-2xl shadow-secondary/50 ">
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
            </div>
          </div>
        </section>

        <section className="mb-14">
          <Faq />
        </section>

        <div className="container mx-auto flex justify-center ">
          <div className="flex flex-col items-center">
            <span className="badge badge-secondary badge-lg mb-3">Наша Команда</span>
            <h2 className=" w-5/6 pb-6 text-center text-3xl font-extrabold text-gray-800 sm:w-4/6 xl:text-4xl">
              Талановиті люди за лаштунками організації
            </h2>
          </div>
        </div>

        <section className="">
          <Team />
        </section>
      </div>
    </main>
  )
}

export default ContactsPage
