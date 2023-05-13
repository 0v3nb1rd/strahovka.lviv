import { PrismaClient } from '@prisma/client'

import Service from './Service'

const prisma = new PrismaClient()

const fetchServices = async () => {
  const res = await prisma.service_category.findMany()
  return res
}

export default async function Services() {
  const items = await fetchServices()

  return items.map((service: any) => (
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
