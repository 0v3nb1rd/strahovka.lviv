// import { SessionProvider } from 'next-auth/react'

interface Props {
  Component: React.ReactNode
  props: any
}

export default function Admin() {
  return (
    <section className="p-4">
      <div className="container">
        <div className="title text-center">
          <h1 className="text-lg font-bold">Admin panel</h1>
          <p>Only Authenticated user should access this page</p>
        </div>
      </div>
    </section>
  )
}
