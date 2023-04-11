import Image from 'next/image'
import React from 'react'

const ServiceCards = () => (
  <div className=" ">
    <ul className="flex items-center justify-center gap-4">
      <li className="">
        <a
          href="./"
          className="flex min-h-[230px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/man-driving.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">Автоцивілка</h2>
          </div>
          <p className="mt-5 text-sm font-light leading-5 text-gray-700">Поліс ОСАЦВ не захищає Ваш автомобіль.</p>
        </a>
      </li>

      <li>
        <a
          href="/"
          className="flex min-h-[230px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/car-new.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">Зелена карта</h2>
          </div>
          <p className="mt-5 text-sm font-light leading-5 text-gray-700">
            «Зелена карта» — це поліс обов’язкового страхування цивільної відповідальності автовласників
          </p>
        </a>
      </li>

      <li>
        <a
          href="/"
          className="flex min-h-[230px] w-80 flex-col rounded-2xl border bg-white/40 px-8 py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Image src="/icons/insurance-user.svg" width="48" height="48" alt="Автоцивілка" />
            <h2 className="text-xl font-semibold text-gray-700">КАСКО</h2>
          </div>
          <p className="mt-5 text-sm font-light leading-5 text-gray-700">
            Поліс захищає Ваш автомобіль практично від будь-яких неприємностей
          </p>
        </a>
      </li>
    </ul>
  </div>
)

export default ServiceCards
