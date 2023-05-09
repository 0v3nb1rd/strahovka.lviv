import Service from './Service'
import { ServiceProps } from '@/@types'

import { baseUrl } from '@/utils'

const fetchServices = async (): Promise<ServiceProps> => {
  const res = await fetch(`${baseUrl}/api/services`)
  // await new Promise((res) => setTimeout(res, 10000))

  if (!res.ok) {
    throw new Error('Failed to fetch data on: ' + 'service')
  }

  const servicesData = await res.json()
  return servicesData
}

export default async function Services() {
  const items = await fetchServices()

  return items.all.map((service: any) => (
    <li key={service.id}>
      <Service
        title={service.title}
        category={service.category_ua}
        description={service.short_text}
        imgUrl={service.thumbnail_url}
        slug={service.slug}
      />
    </li>
  ))
}
