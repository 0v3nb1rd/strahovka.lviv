import Link from 'next/link'

const NewsPage = () => {
  return (
    <main className="main main--news-cat">
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-4xl font-bold">News page</h1>
        <section>
          <Link href="/news/info-about-some-historical">Info about some historical</Link>
        </section>
      </div>
    </main>
  )
}

export default NewsPage
