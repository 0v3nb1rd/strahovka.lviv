import { PrismaClient, News } from '@prisma/client'

import NewsList from '@/components/NewsList/NewsList'

type SearchParams = {
  type: 'news' | 'tips'
}
interface Props {
  searchParams: SearchParams
}

const prisma = new PrismaClient()

const fetchALLNews = async (): Promise<News[]> => {
  const res = await prisma.news.findMany()

  // ToDo should add error page & remove possibility return null
  return res
}

const fetchNewsByType = async (type: string): Promise<News[]> => {
  const res = await prisma.news.findMany({
    where: { category: type },
  })

  // ToDo should add error page & remove possibility return null
  return res
}

export default async function NewsPage(props: Props) {
  const { type } = props.searchParams

  if (!type) {
    const newsData = await fetchALLNews()
    return <NewsList newsData={newsData} />
  }

  if (type === 'news') {
    // const filteredNews = newsData.filter((newsItem: any) => {
    //   return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    // })
    const newsData = await fetchNewsByType('news')
    return <NewsList newsData={newsData} />
  }

  if (type === 'tips') {
    // const filteredTips = newsData.filter((newsItem: any) => {
    //   return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    // })
    const newsData = await fetchNewsByType('tips')
    return <NewsList newsData={newsData} />
  }

  // return <NewsList newsData={newsData} />
}
