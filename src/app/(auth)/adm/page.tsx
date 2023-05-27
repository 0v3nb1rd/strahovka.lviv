import { SessionProvider } from 'next-auth/react'

interface Props {
  Component: React.ReactNode
  props: any
}

export default function Admin(props: Props) {
  return <h1>Admin panel</h1>
}
