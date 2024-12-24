import { Suspense } from 'react'
import { Service_category } from '@prisma/client'

import Service from './Service'
import { Skeleton } from './Skeleton'

interface Props {
  serviceCat?: Service_category[]
  maxLength?: number
  isAdm?: boolean
}

export function ServiceList({ serviceCat, isAdm }: Props) {
  const skeleton = [...Array(9)].map((_, i) => (
    <li key={i} className="rounded-2xl bg-white">
      <Skeleton />
    </li>
  ))

  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {serviceCat?.map((service: Service_category) => (
        <li key={service.id}>
          <Suspense fallback={skeleton}>
            <Service service={service} isAdm={isAdm} />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}
