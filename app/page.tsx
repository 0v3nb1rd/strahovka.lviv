// import { Inter } from 'next/font/google'

import Banner from '@/components/Banner'
import FeaturesSection from '@/components/Features'
import ServiceCards from '@/components/ServiceCards/ServiceCards'

// const inter = Inter({ subsets: ['latin'] })
const HomePage = () => {
  return (
    <main className="main">
      <section className="mt-6">
        <div className="container">
          {/* <h1 className="m-10 text-center text-4xl font-bold">Автоцивілка</h1> */}
          <Banner />
        </div>
      </section>
      <section className="-mt-24">
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <section>
        <FeaturesSection />
      </section>
    </main>
  )
}

export default HomePage
