'use client'
import Image from 'next/image'

import errorMascot from '@/assets/icons/error.png'

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <Image src={errorMascot} alt="error icon" className="mb-8 w-56" />
      <div className="rounded-2xl bg-white px-9 py-14 shadow-md">
        <h3 className="text-3xl font-bold">Well this is embarrassing </h3>
        <p className="text-reg font-bold">We couldn't find this service</p>
        <p className="mt-6 text-sm font-light">Error code: 404</p>
      </div>
    </div>
  )
}
