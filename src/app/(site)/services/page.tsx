import { getServiceCat } from '@/lib/_actions/services'
import { ServiceList } from '@/components/Services'

import { getServices } from '@/lib/notion'

export default async function ServicesPage() {
  const { serviceCat } = await getServiceCat()
  const { data, rows } = await getServices()
  console.log(data)

  return <ServiceList serviceCat={data} />
  // return <ServiceList serviceCat={serviceCat} />
}
