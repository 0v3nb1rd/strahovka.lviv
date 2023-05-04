import Services from '../../components/Services/Services'
import { baseUrl } from '../../utils'
import { ServiceProps } from '@/@types'

const fetchServices = async (): Promise<ServiceProps> => {
  const res = await fetch(`${baseUrl}/api/services`)

  if (!res.ok) {
    throw new Error('Failed to fetch data on: ' + 'service')
  }

  const servicesData = await res.json()
  return servicesData
}

export default async function ServicesPage() {
  const { allCards } = await fetchServices()

  return (
    <main className="main main--services pt-32">
      <div className="container mx-auto">
        <div className="mb-16 mt-2">
          <Services data={allCards} />
        </div>
      </div>
    </main>
  )
}
