import { PrismaClient, News } from '@prisma/client'

import NewsList from '@/components/UI/NewsList/NewsList'

const prisma = new PrismaClient()

const fetchNews = async (): Promise<News[]> => {
  const res = await prisma.news.findMany()

  // ToDo should add arror page & remove possibility return null
  return res
}

export default async function NewsPage(props: any) {
  const newsData = await fetchNews()

  const { type } = props.searchParams

  if (type === 'news') {
    const filteredNews = newsData.filter((newsItem: any) => {
      return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    })
    return <NewsList newsData={filteredNews} />
  }

  if (type === 'tips') {
    const filteredTips = newsData.filter((newsItem: any) => {
      return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    })
    return <NewsList newsData={filteredTips} />
  }

  return <NewsList newsData={newsData} />
}
