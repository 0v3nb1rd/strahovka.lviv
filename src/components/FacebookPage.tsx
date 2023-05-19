'use client'

import { FacebookProvider, Page } from 'react-facebook'

export default function FacebookPage() {
  return (
    <FacebookProvider appId="123456789">
      <Page href="https://www.facebook.com/1tmolviv/" tabs="timeline" />
    </FacebookProvider>
  )
}
