'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function SignButton() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className="ml-auto flex gap-4">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="btn-secondary btn">
          Sign Out
        </button>
      </div>
    )
  }
  return (
    <button onClick={() => signIn()} className="btn-primary btn">
      Sign In
    </button>
  )
}
