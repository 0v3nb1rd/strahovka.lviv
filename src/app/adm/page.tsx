// import { SessionProvider } from 'next-auth/react'

interface Props {
  Component: React.ReactNode
  props: any
}

export default function Admin() {
  return (
    <div className="container">
      <h1>Admin panel</h1>
      <p>Only Authenticated user should acccess this page</p>
    </div>
  )
}
