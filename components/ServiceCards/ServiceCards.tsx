import Image from 'next/image'
import React from 'react'

const ServiceCards = () => (
  <div className=" ">
    <ul className="flex items-center justify-center gap-4">
      <li className="">
        <a
          href="./"
          className="flex min-h-[220px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/man-driving.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">Автоцивілка</h2>
          </div>
          <p className="text-md mt-5 font-light leading-5 text-gray-700">Безпека вашого авто та грошей.</p>
        </a>
      </li>

      <li>
        <a
          href="/"
          className="flex min-h-[220px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/car-new.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">Зелена карта</h2>
          </div>
          <p className="text-md mt-5 font-light leading-5 text-gray-700">Комфортні подорожі за кордоном.</p>
        </a>
      </li>

      <li>
        <a
          href="/"
          className="flex min-h-[220px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/insurance-user.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">КАСКО</h2>
          </div>
          <p className="text-md mt-5 font-light leading-5 text-gray-700">
            Захистіть свій автомобіль від будь-яких небезпек.
          </p>
        </a>
      </li>
    </ul>
  </div>
)

export default ServiceCards
