import Image from 'next/image'
import Link from 'next/link'

const fetchNews = async () => {
  const resp = await fetch(`./api/news`)
  // await new Promise((res) => setTimeout(res, 2000))
  const newsData = await resp.json()
  return newsData
}

const RelatedPosts = async ({ maxLength }: { maxLength: number | undefined }) => {
  const newsData = await fetchNews()

  return (
    <section className="sticky top-[5.5rem] h-full w-[320px]">
      <div className="mb-6 overflow-hidden rounded-2xl bg-white p-5">
        <h2 className="text-lg font-bold">Популярні статті:</h2>
        <ul>
          {newsData?.slice(0, maxLength).map((data: any) => (
            <li key={data.id}>
              <Link href={`/news/${data.slug}`} className="group mt-4 flex items-center justify-between gap-2">
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-xs text-neutral-700">{data.category}</span>
                  <h3 className="line-clamp-2 text-sm font-semibold transition group-hover:text-primary group-hover:underline">
                    {data.title}
                  </h3>
                </div>
                <figure className="relative h-14 w-10 overflow-hidden rounded-lg transition  group-hover:shadow">
                  <Image src={data.imageUrl} alt={data.title} fill className="object-cover" />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RelatedPosts
