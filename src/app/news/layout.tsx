import RelatedPosts from '@/components/RelatedNews'

import {
  BiLike,
  BiShare,
  BiMessageAltDetail,
  BiShow,
  BiInfoCircle,
  BiHome,
  BiBookmark,
  BiNews,
  BiTimeFive,
} from 'react-icons/Bi'

// interface NewsLayoutProps {
//   children: React.ReactNode
// }

export const metadata = {
  title: 'Новини | Strahovka.lviv',
  description: 'A sample Next.js app showing dynamic routing with modals as a route.',
  // metadataBase: new URL("https://nextgram.vercel.app"),
}

const NewsLayout = async (props: any) => {
  return (
    <main className="main main--news">
      <div className="container mx-auto">
        <div className="my-2 flex justify-between">
          <aside className="sticky top-[5.5rem] h-full w-[240px]">
            <div className="mb-6 flex flex-col gap-2">
              <a className="btn-ghost btn-active btn-block btn justify-start gap-2 text-base normal-case" href="/news/">
                <BiHome fontSize={24} /> Усі статті
              </a>
              <a className="btn-ghost btn-block btn justify-start gap-2 text-base	normal-case" href="/news/">
                <BiNews fontSize={24} /> Новини
              </a>
              <a className="btn-ghost btn-block btn justify-start gap-2 text-base normal-case	" href="/news/">
                <BiInfoCircle fontSize={24} /> Поради
              </a>
            </div>
          </aside>

          <section className="mx-3 w-[640px]">{props.children}</section>

          {/* @ts-expect-error Server Component */}
          <RelatedPosts maxLength={3} />

          {/* {modal} */}
        </div>
      </div>
    </main>
  )
}

export default NewsLayout
