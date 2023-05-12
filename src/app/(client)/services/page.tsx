import Services from './components/Services'

import { Suspense } from 'react'
import Skeleton from './components/Skeleton'

export default function ServicesPage() {
  const skeleton = [...Array(9)].map((_, i) => (
    <li key={i} className="rounded-2xl bg-white">
      <Skeleton />
    </li>
  ))

  return (
    <ul className="grid grid-cols-3 gap-8">
      {/* {skeleton} */}
      <Suspense fallback={skeleton}>
        {/* @ts-expect-error Async Server Component */}
        <Services />
      </Suspense>
    </ul>
  )
}
