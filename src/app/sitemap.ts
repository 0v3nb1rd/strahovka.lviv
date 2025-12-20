import { getURL, removeTrailingSlash } from '@/utils'
import type { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

const SITE_URL = getURL('/').slice(0, -1) // Remove trailing slash

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/blog', '/blog/news', '/blog/tips', '/services', '/cooperation', '/contacts']

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${removeTrailingSlash(path)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  // Fetch dynamic blog posts directly from database
  const blogNews = await prisma.post.findMany({
    where: { category: 'news' },
    select: { slug: true, created_at: true },
    orderBy: { created_at: 'desc' },
  })
  const blogNewsEntries = blogNews.map((p) => ({
    url: `${SITE_URL}/blog/news/${p.slug}`,
    lastModified: p.created_at ? new Date(p.created_at) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  const blogTips = await prisma.post.findMany({
    where: { category: 'tips' },
    select: { slug: true, created_at: true },
    orderBy: { created_at: 'desc' },
  })
  const blogTipsEntries = blogTips.map((p) => ({
    url: `${SITE_URL}/blog/tips/${p.slug}`,
    lastModified: p.created_at ? new Date(p.created_at) : new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...blogNewsEntries, ...blogTipsEntries]
}
