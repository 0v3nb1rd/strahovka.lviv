import { and, desc, eq, gt, sql } from 'drizzle-orm'

import { db } from '@/lib/db'
import { post, type Post } from '@/db/schema'

export type LikeAction = 'increment' | 'decrement'

/**
 * Changes a post's like counter by ±1 without going below zero.
 * Returns the new count, or null if there is no post with this id.
 */
export async function changePostLikes(id: number, action: LikeAction): Promise<number | null> {
  const [updated] =
    action === 'increment'
      ? await db
          .update(post)
          .set({ like_count: sql`${post.like_count} + 1` })
          .where(eq(post.id, id))
          .returning({ like_count: post.like_count })
      : await db
          .update(post)
          .set({ like_count: sql`${post.like_count} - 1` })
          .where(and(eq(post.id, id), gt(post.like_count, 0)))
          .returning({ like_count: post.like_count })
  if (updated) return updated.like_count

  // Nothing updated: either no such post, or a decrement at zero.
  const [row] = await db.select({ like_count: post.like_count }).from(post).where(eq(post.id, id))
  return row ? row.like_count : null
}

/** Adds one view to a post. Returns the new count, or null if the post does not exist. */
export async function incrementPostViews(id: number): Promise<number | null> {
  const [updated] = await db
    .update(post)
    .set({ views: sql`${post.views} + 1` })
    .where(eq(post.id, id))
    .returning({ views: post.views })
  return updated ? updated.views : null
}

/** All posts (optionally of one category), newest first. */
export async function getPosts(opts: { category?: string; limit?: number } = {}): Promise<Post[]> {
  const q = db
    .select()
    .from(post)
    .where(opts.category ? eq(post.category, opts.category) : undefined)
    .orderBy(desc(post.created_at))
    .$dynamic()
  return opts.limit ? q.limit(opts.limit) : q
}

/** Most liked posts. */
export async function getTopPosts(limit: number): Promise<Post[]> {
  return db.select().from(post).orderBy(desc(post.like_count)).limit(limit)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const [row] = await db.select().from(post).where(eq(post.slug, slug)).limit(1)
  return row ?? null
}

/** Slugs and dates for sitemap.xml. */
export async function getPostSitemapEntries(category: string) {
  return db
    .select({ slug: post.slug, created_at: post.created_at })
    .from(post)
    .where(eq(post.category, category))
    .orderBy(desc(post.created_at))
}
