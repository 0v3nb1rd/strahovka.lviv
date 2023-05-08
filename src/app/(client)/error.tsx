'use client'
import Image from 'next/image'

import errorMascot from '@/assets/icons/error.png'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <Image src={errorMascot} alt="error icon" className="mb-12 w-56" />
      <div className="rounded-2xl bg-white px-9 py-10 shadow-md">
        <h3 className="mb-4 text-3xl font-bold">Well this is embarrassing: </h3>
        <p className="text-reg text-xl font-bold text-red-400"> -- {error.message || 'Something went wrong'}</p>
        <p className="mt-4 text-sm font-light">
          Error code: <b>400</b>
        </p>
        <div className="mt-6 flex justify-around">
          <button onClick={reset} className=" btn">
            Try again
          </button>
          <Link href="/" className="btn-secondary btn">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}
