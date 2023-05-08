type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function sitemap() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const allPosts = (await res.json()) as Post[]

  const posts = allPosts.map((post) => ({
    url: `http://localhost:3000/post${post.id}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', '/about', '/post'].map((route) => ({
    url: `http://localhost:3000/post${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}
