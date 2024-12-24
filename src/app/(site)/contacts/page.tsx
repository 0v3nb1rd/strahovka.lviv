import { BiPhoneCall, BiEnvelope, BiMap } from 'react-icons/bi'
import PhoneList from '@/components/PhoneList'

import Faq from '@/components/Faq'
import { Team } from '@/components'
import ContactForm from '@/components/Forms/ContactForm'
import siteConfig from '@/config/site'
import { phoneMask } from '@/helpers'

// import { AuthRequiredError } from '@/lib/exceptions'

// const session = null

export default function ContactsPage() {
  // if (!session) throw new AuthRequiredError()

  return (
    <main className="main main--contacts pt-32">
      <div className="container mx-auto">
        <section className="mb-14 mt-2 rounded-2xl bg-white p-6 shadow-md sm:p-14 md:mx-10">
          <div className="flex flex-col gap-8">
            <div className="title mx-auto max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="badge-secondary badge badge-lg mb-3">Контакти</span>
                <h1 className="mb-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
                  Зв'яжіться з нами
                </h1>
                <p className="text-center text-lg font-semibold text-black/60">
                  Ми готові допомогти вам з автомобільним страхуванням. Зв'яжіться з нами за телефоном, електронною
                  поштою або через форму на сайті.
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse justify-around xl:flex-row">
              <ul className="title flex w-full flex-col gap-6 md:gap-12 xl:w-[40%]">
                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white  shadow-2xl shadow-primary/50 md:h-[72px] md:w-[72px]">
                      <BiPhoneCall fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="font-medium text-black/40">Телефон:</span>

                      {/* <a className="font-bold leading-6" href={`tel:${siteConfig.contacts.phones[0]}`}>
                        +38 {phoneMask(siteConfig.contacts.phones[0])}
                      </a>
                      <a className="font-bold leading-6" href={`tel:${siteConfig.contacts.phones[1]}`}>
                        +38(093)655 58 99
                      </a> */}

                      <PhoneList />
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#80ed99] shadow-2xl shadow-[#80ed99]/80 md:h-[72px] md:w-[72px]">
                      <BiEnvelope fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="font-medium text-black/40">Email:</span>
                      <a className="font-bold leading-6" href={`mailto:${siteConfig.contacts.email}`}>
                        {siteConfig.contacts.email}
                      </a>
                    </span>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary shadow-2xl shadow-secondary/50 md:h-[72px] md:w-[72px] ">
                      <BiMap fontSize={34} />
                    </div>
                    <span className="flex flex-col">
                      <span className="text-lg font-medium text-black/40">Адрес:</span>
                      <span
                        className="font-bold leading-6"
                        dangerouslySetInnerHTML={{ __html: siteConfig.contacts.address.replace(/\n/g, '<br />') }}
                      ></span>
                    </span>
                  </div>
                </li>
              </ul>

              <ContactForm className="mb-16 w-full xl:mb-0 xl:w-[40%]" />
            </div>
          </div>
        </section>

        <section className="mb-14">
          <Faq />
        </section>

        <div className="container mx-auto flex justify-center ">
          <div className="flex flex-col items-center">
            <span className="badge-secondary badge badge-lg mb-3">Наша Команда</span>
            <h2 className="w-5/6 pb-6 text-center text-3xl font-extrabold text-gray-800 sm:w-4/6 xl:text-4xl">
              Талановиті люди за лаштунками організації
            </h2>
          </div>
        </div>

        <section>
          <Team />
        </section>
      </div>
    </main>
  )
}
