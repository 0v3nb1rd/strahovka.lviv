import { Suspense } from 'react'

import RelatedPosts from '@/components/RelatedNews'
import Aside from '@/components/NewsList/Aside'
import LoadingNews from './components/LoadingNews'
import LoadingTopNews from './components/LoadingTopNews'
import FacebookPage from '@/components/FacebookPage'

export const metadata = {
  title: 'Новини | Strahovka.lviv',
  description: 'A sample Next.js app showing dynamic routing with modals as a route.',
  // metadataBase: new URL("https://nextgram.vercel.app"),
}

const NewsLayout = async (props: any) => {
  return (
    <main className="main main--news pt-32">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Aside />

          <section className="mx-3 w-[640px] pb-6">
            <Suspense fallback={<LoadingNews />}>{props.children}</Suspense>
          </section>

          <section className="sticky top-[5.5rem] mb-6 h-full w-[320px]">
            <div className="mb-6 overflow-hidden rounded-2xl bg-white p-5">
              <h2 className="text-lg font-bold">Популярні статті:</h2>
              <Suspense fallback={<LoadingTopNews />}>
                {/* @ts-expect-error Server Component */}
                <RelatedPosts maxLength={3} />
              </Suspense>
            </div>
            <div className="mx-2">
              <FacebookPage />
            </div>
          </section>

          {/* {props.modal} */}
        </div>
      </div>
    </main>
  )
}

export default NewsLayout
