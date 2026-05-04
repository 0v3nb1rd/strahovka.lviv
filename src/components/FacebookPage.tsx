'use client'

import { FacebookErrorBoundary, FacebookProvider, Page } from 'react-facebook'

const FacebookPage = () => {
  return (
    <FacebookProvider appId="1102140260117639">
      <FacebookErrorBoundary
        fallback={
          <div className="flex h-40 w-full max-w-[320px] items-center justify-center rounded-2xl bg-white/60 text-sm text-gray-400">
            Facebook не вдалося завантажити
          </div>
        }
      >
        <Page
          href="https://www.facebook.com/pustomyty.online/"
          tabs="timeline"
        />
      </FacebookErrorBoundary>
    </FacebookProvider>
  )
}

export default FacebookPage
