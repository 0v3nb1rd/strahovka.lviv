import { Post } from '@prisma/client'

import prisma from '@/lib/prisma'
import NewsList from '@/components/NewsList/NewsList'

interface Props {
  params: {
    category: string
  }
}

const fetchNewsByType = async (type: string): Promise<Post[]> => {
  const res = await prisma.post.findMany({
    where: { category: type },
    orderBy: { created_at: 'desc' },
  })

  // ToDo should add error handler & remove possibility return null
  return res
}

export default async function NewPage({ params }: Props) {
  const newsData = await fetchNewsByType(params.category)

  return <NewsList newsData={newsData} />
}
