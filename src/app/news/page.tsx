import NewsList from '@/components/UI/NewsList/NewsList'

const fetchNews = async () => {
  const resp = await fetch(`${process.env.BASE_FETCH_URL}/api/news`)
  await new Promise((res) => setTimeout(res, 2000))
  const newsData = await resp.json()
  return newsData
}

const NewsPage = async () => {
  const newsData = await fetchNews()

  return <NewsList newsData={newsData} />
}

export default NewsPage
