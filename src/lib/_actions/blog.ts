import prisma from '@/lib/prisma'

export type LikeAction = 'increment' | 'decrement'

/**
 * Changes a post's like counter by ±1 without going below zero.
 * Returns the new count, or null if there is no post with this id.
 */
export async function changePostLikes(id: number, action: LikeAction): Promise<number | null> {
  await prisma.post.updateMany({
    where: action === 'decrement' ? { id, like_count: { gt: 0 } } : { id },
    data: { like_count: { [action]: 1 } },
  })
  const post = await prisma.post.findUnique({ where: { id }, select: { like_count: true } })
  return post ? post.like_count : null
}

/** Adds one view to a post. Returns the new count, or null if the post does not exist. */
export async function incrementPostViews(id: number): Promise<number | null> {
  const { count } = await prisma.post.updateMany({ where: { id }, data: { views: { increment: 1 } } })
  if (count === 0) return null
  const post = await prisma.post.findUnique({ where: { id }, select: { views: true } })
  return post ? post.views : null
}
