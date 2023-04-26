import Services from '@/components/Services/Services'

const fetchServices = async () => {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/services`)
  if (!res.ok) {
    throw new Error('Failed to fetch data on: ' + process.env.BASE_FETCH_URL)
  }
  const servicesData = await res.json()
  return servicesData
}

const ServicesPage = async (props: any) => {
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

export default ServicesPage
