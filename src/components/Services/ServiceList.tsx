import { Suspense } from 'react'
import { Service_category } from '@prisma/client'

import Service from './Service'
import { Skeleton } from './Skeleton'

interface Props {
  serviceData: Service_category[]
  maxLength?: number
}

export function ServiceList({ serviceData }: Props) {
  const skeleton = [...Array(9)].map((_, i) => (
    <li key={i} className="rounded-2xl bg-white">
      <Skeleton />
    </li>
  ))

  return (
    <ul className="grid grid-cols-3 gap-8">
      {serviceData.map((service: Service_category) => (
        <li key={service.id}>
          <Suspense fallback={skeleton}>
            <Service service={service} />
          </Suspense>
        </li>
      ))}
    </ul>
  )
}
