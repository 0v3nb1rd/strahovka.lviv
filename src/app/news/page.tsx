import { Suspense } from 'react'

import LoadingPage from './loading'
// import NewsList from '@/components/UI/NewsList/NewsList'

const fetchNews = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/news`)
  // await new Promise((res) => setTimeout(res, 2000))
  if (!res.ok) {
    throw new Error('Failed to fetch data on: ' + process.env.NEXT_PUBLIC_VERCEL_URL)
  }
  const newsData = await res.json()
  return newsData
}

const NewsPage = async (props: any) => {
  const newsData = await fetchNews()

  const { type } = props.searchParams

  if (type === 'news') {
    const filteredNews = newsData.filter((newsItem: any) => {
      return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    })
    return <Suspense fallback={<LoadingPage />}>{/* <NewsList newsData={filteredNews} /> */}</Suspense>
  }

  if (type === 'tips') {
    const filteredTips = newsData.filter((newsItem: any) => {
      return newsItem.category_en.toLowerCase().includes(type.toLowerCase())
    })
    return <Suspense fallback={<LoadingPage />}>{/* <NewsList newsData={filteredTips} /> */}</Suspense>
  }

  return <Suspense fallback={<LoadingPage />}>{/* <NewsList newsData={newsData} /> */}</Suspense>
}

export default NewsPage
