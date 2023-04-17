import Services from '@components/Services/Services'

const ServicesPage = () => {
  return (
    <main className="main main--services">
      <div className="container mx-auto">
        <div className=" mb-16 mt-2 grid grid-cols-3 gap-8">
          <Services />
        </div>
      </div>
    </main>
  )
}

export default ServicesPage
