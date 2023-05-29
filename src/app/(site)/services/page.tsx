import { Service_category } from '@prisma/client'
import prisma from '@/lib/prisma'

import { ServiceList } from '@/components/Services'

const fetchServices = async (): Promise<Service_category[]> => {
  const res = await prisma.service_category.findMany()

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function ServicesPage() {
  const serviceData = await fetchServices()
  return <ServiceList serviceData={serviceData} />
}
