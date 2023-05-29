import { Service_category } from '@prisma/client'
import prisma from '@/lib/prisma'

import { ServiceList } from '@/components/Services'

const fetchServices = async (): Promise<Service_category[]> => {
  const res = await prisma.service_category.findMany()

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function ServicePage() {
  const serviceData = await fetchServices()

  return (
    <section className="p-4">
      <div className="container">
        <div className="title">
          <h1 className="mr-4 inline-flex text-lg font-bold">News page</h1>
          length: {serviceData.length}
        </div>
        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <ServiceList serviceData={serviceData} />{' '}
      </div>
    </section>
  )
}
