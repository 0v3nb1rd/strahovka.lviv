import { Post } from '@prisma/client'
import prisma from '@/lib/prisma'

import NewsList from '@/components/NewsList/NewsList'

const fetchALLNews = async (): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    orderBy: { created_at: 'desc' },
  })

  // ToDo should add error page & remove possibility return null
  return res
}

export default async function NewsPage() {
  const newsData = await fetchALLNews()

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
