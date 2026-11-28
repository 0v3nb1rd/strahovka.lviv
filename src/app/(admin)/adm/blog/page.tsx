import { getPosts } from '@/lib/_actions/blog'

import NewsList from '@/components/NewsList/NewsList'

export default async function NewsPage() {
  const newsData = await getPosts()

  return (
    <section className="p-4">
      <div className="container">
        <div className="title">
          <h1 className="mr-4 inline-flex text-lg font-bold">News page</h1>
          length: {newsData.length}
        </div>

        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>
        <NewsList newsData={newsData} />
      </div>
    </section>
  )
}
