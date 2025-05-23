'use client'

import Image from 'next/image'
import type { MainServices } from '@/@types'
import { Service } from '@prisma/client'

interface ServicesProps extends Service {
  onClick?: any
}
interface MainServicesProps extends MainServices {
  onClick?: any
}

export default function Card({ title_ua, short_text, icon_url, onClick }: ServicesProps | MainServicesProps) {
  return (
    <label
      onClick={() => onClick({ title_ua, short_text, icon_url })}
      htmlFor="modal-service"
      className="flex relative lg:min-h-[220px] lg:w-80 cursor-pointer flex-col rounded-2xl border bg-white/40 lg:px-8 px-6 py-8 lg:py-12 shadow backdrop-blur-lg delay-75 duration-100 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
    >
      <div className="flex items-center gap-4">
        <Image src={`${icon_url}`} width="48" height="48" alt="Автоцивілка" />
        <h2 className="text-xl font-semibold text-gray-700">{title_ua}</h2>
      </div>
      <p className="text-md mt-5 font-light leading-5 text-gray-700 max-lg:pr-24">{short_text}</p>
			<button className='absolute bottom-5 text-right right-8 text-gray-700 text-sm'>Замовити {"\n>"}</button>
    </label>
  )
}
