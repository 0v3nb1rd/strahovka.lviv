import { getPosts } from '@/lib/_actions/blog'
import NewsList from '@/components/NewsList/NewsList'

export default async function NewsPage() {
  const newsData = await getPosts()
  return <NewsList newsData={newsData} />
}
