import Services from '@/components/Services/Services'

const fetchServices = async () => {
  const resp = await fetch(`${process.env.BASE_FETCH_URL}/api/services`)
  const servicesData = await resp.json()
  return servicesData
}

const ServicesPage = async () => {
  const servicesData = await fetchServices()

  return (
    <main className="main main--services">
      <div className="container mx-auto">
        <div className="mb-16 mt-2">
          <Services data={servicesData} />
        </div>
      </div>
    </main>
  )
}

export default ServicesPage
