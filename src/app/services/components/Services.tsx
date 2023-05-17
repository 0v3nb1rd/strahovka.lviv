import { Service_category } from '@prisma/client'
import prisma from '@/lib/prisma'

import Service from './Service'

const fetchServices = async (): Promise<Service_category[]> => {
  const res = await prisma.service_category.findMany()

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function Services() {
  const items = await fetchServices()

  return items.map((service: Service_category) => (
    <li key={service.id}>
      <Service service={service} />
    </li>
  ))
}
