import Services from '@/components/Services/Services'
import getURL from '@/utils'

export interface ServicesProps {
  id: string
  category_en: string
  category_ua: string
  date: string
  title: string
  slug: string
  short_text: string
  full_text: string
  thumbnail_url: string
  img_url: string
}

const fetchServices = async (): Promise<ServicesProps> => {
  const res = await fetch(getURL('/api/services'))

  if (!res.ok) {
    throw new Error('Failed to fetch data on: ' + 'service')
  }

  const servicesData = await res.json()
  return servicesData
}

export default async function ServicesPage() {
  const servicesData = await fetchServices()

  return (
    <main className="main main--services pt-32">
      <div className="container mx-auto">
        <div className="mb-16 mt-2">
          <Services data={servicesData} />
        </div>
      </div>
    </main>
  )
}
