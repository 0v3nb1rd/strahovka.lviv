import { getServiceCat } from '@/lib/_actions/services'
import { ServiceList } from '@/components/Services'

export default async function ServicesPage() {
  const { serviceCat } = await getServiceCat()

  return <ServiceList serviceCat={serviceCat} />
}
