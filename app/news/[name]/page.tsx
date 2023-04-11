interface paramsProps {
  params: {
    name: string
  }
}

const News: React.FC<paramsProps> = ({ params: { name } }) => {
  return (
    <main className="main main--news-art">
      <div className="container mx-auto">
        <h1 className="m-10 text-center text-4xl font-bold">New page</h1>
        <article>{name}</article>
      </div>
    </main>
  )
}

export default News
