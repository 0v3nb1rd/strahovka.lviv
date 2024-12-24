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
        <div className="flex flex-wrap justify-between max-lg:flex-col">
          <Aside className="w-full max-md:mx-4 lg:w-[240px]" />

          <section className="mx-0 w-full pb-6 lg:mx-3 lg:w-[calc(100%-320px)] xl:mx-0 2xl:w-[640px]">
            <Suspense fallback={<LoadingNews />}>{props.children}</Suspense>
          </section>

          <section className="top-[5.5rem] mb-6 h-full max-w-3xl justify-end max-2xl:ml-auto max-2xl:flex max-md:w-full max-md:flex-col max-md:items-center max-sm:m-0 xl:sticky 2xl:w-[320px]">
            <div className="z-10 mb-6 overflow-hidden rounded-2xl bg-white p-5">
              <h2 className="text-lg font-bold">Популярні статті:</h2>
              <Suspense fallback={<LoadingTopNews />}>
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
