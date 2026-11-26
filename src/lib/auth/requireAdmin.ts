import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/lib/prisma'

export const ADMIN_ROLES = ['admin', 'dev'] as const

/**
 * Перевіряє сесію NextAuth і роль користувача в БД (роль не зберігається в JWT,
 * тож відкликання ролі діє одразу). Якщо доступу немає — сам відповідає 401/403
 * і повертає null; обробник у такому разі просто виходить.
 */
export async function requireAdmin(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const email = session?.user?.email
  if (!email) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }

  const user = await prisma.user.findUnique({ where: { email }, select: { id: true, role: true } })
  if (!user || !ADMIN_ROLES.includes(user.role as (typeof ADMIN_ROLES)[number])) {
    res.status(403).json({ error: 'Forbidden' })
    return null
  }

  return user
}
