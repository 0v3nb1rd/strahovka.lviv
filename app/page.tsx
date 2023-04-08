import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <main className="main">
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-4xl font-bold">Strahovka lviv</h1>
      </div>
    </main>
  )
}

export default HomePage
