import CtaBlock from '@/components/CtaBlock'
import Team from '@/components/Team'
import { BiPhoneCall, BiEnvelope, BiMap } from 'react-icons/Bi'
const ContactsPage = () => {
  return (
    <main className="main main--about">
      <div className="container mx-auto">
        <section>
          <Team />
        </section>

        <section className="my-2 mb-20 rounded-2xl border-2 border-gray-100 bg-white p-14">
          <div className="flex flex-col gap-16">
            <div className="title mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="badge-secondary badge badge-lg">Контакти</span>
                <h1 className="mb-2 mt-4 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                  Зв'яжіться з нами
                </h1>
                <p className="text-center text-lg font-semibold text-black/60">
                  Ми готові допомогти вам з автомобільним страхуванням. Зв'яжіться з нами за телефоном, електронною
                  поштою або через форму на сайті.
                </p>
              </div>
            </div>

            <ul className="title flex items-center justify-between">
              <li>
                <div className="flex items-center gap-8">
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-2xl bg-primary text-white shadow-2xl shadow-primary">
                    <BiPhoneCall fontSize={32} />
                  </div>
                  <span className="flex flex-col">
                    <span className="font-medium text-black/40">Телефон:</span>
                    <a className="text-lg font-bold">+38(068)767 88 98</a>
                    <a className="text-lg font-bold">+38(093)655 58 99</a>
                  </span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-8">
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-2xl bg-[#80ed99] shadow-2xl shadow-[#80ed99]">
                    <BiEnvelope fontSize={32} />
                  </div>
                  <span className="flex flex-col">
                    <span className="text-lg font-medium text-black/40">Email:</span>
                    <a className="text-lg font-bold">strahovka.lviv.ua@gmail.com</a>
                  </span>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-8">
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-2xl bg-secondary shadow-2xl shadow-secondary  ">
                    <BiMap fontSize={32} />
                  </div>
                  <span className="flex flex-col">
                    <span className="text-lg font-medium text-black/40">Адрес:</span>
                    <span className="text-lg font-bold">
                      м.Львів, 79000 <br /> пр.Шевченка
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ContactsPage
