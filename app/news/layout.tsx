import RelatedPosts from '../components/RelatedNews'
import Aside from '../components/UI/NewsList/Aside'

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

          <section className="mx-3 w-[640px]">{props.children}</section>

          {/* @ts-expect-error Server Component */}
          <RelatedPosts maxLength={3} />

          {/* {props.modal} */}
        </div>
      </div>
    </main>
  )
}

export default NewsLayout
