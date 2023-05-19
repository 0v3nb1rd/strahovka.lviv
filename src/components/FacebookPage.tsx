'use client'

import { FacebookProvider, Page } from 'react-facebook'

export default function FacebookPage() {
  return (
    <FacebookProvider appId="1102140260117639">
      <Page href="https://www.facebook.com/pustomyty.online/" tabs="timeline" />
    </FacebookProvider>
  )
}
