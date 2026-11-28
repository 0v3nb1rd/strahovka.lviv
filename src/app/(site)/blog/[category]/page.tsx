import { getPosts } from '@/lib/_actions/blog'
import NewsList from '@/components/NewsList/NewsList'

interface Props {
  params: {
    category: string
  }
}

export default async function NewPage({ params }: Props) {
  const newsData = await getPosts({ category: params.category })

  return <NewsList newsData={newsData} />
}
