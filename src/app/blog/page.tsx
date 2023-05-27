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
  return <NewsList newsData={newsData} />
}
