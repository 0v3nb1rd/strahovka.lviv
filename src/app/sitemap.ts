import { baseUrl, addTrailingSlash } from '@/utils'
import type { MetadataRoute } from 'next'
import { getPostSitemapEntries } from '@/lib/_actions/blog'

const SITE_URL = baseUrl

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/blog', '/blog/news', '/blog/tips', '/services', '/cooperation', '/contacts']

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${addTrailingSlash(path)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  // Fetch dynamic blog posts directly from database
  const blogNews = await getPostSitemapEntries('news')
  const blogNewsEntries = blogNews.map((p) => ({
    url: `${SITE_URL}${addTrailingSlash(`/blog/news/${p.slug}`)}`,
    lastModified: p.created_at ? new Date(p.created_at) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const blogTips = await getPostSitemapEntries('tips')
  const blogTipsEntries = blogTips.map((p) => ({
    url: `${SITE_URL}${addTrailingSlash(`/blog/tips/${p.slug}`)}`,
    lastModified: p.created_at ? new Date(p.created_at) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...blogNewsEntries, ...blogTipsEntries]
}
