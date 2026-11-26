import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/lib/prisma'
import { isAdminRole } from '@/lib/auth/roles'

/**
 * Checks the NextAuth session and the user's role in the DB (not the role in the JWT,
 * which lives until the session expires), so revoking a role takes effect immediately.
 * On failure it responds with 401/403 itself and returns null; the handler just returns.
 */
export async function requireAdmin(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  const email = session?.user?.email
  if (!email) {
    res.status(401).json({ error: 'Unauthorized' })
    return null
  }

  const user = await prisma.user.findUnique({ where: { email }, select: { id: true, role: true } })
  if (!user || !isAdminRole(user.role)) {
    res.status(403).json({ error: 'Forbidden' })
    return null
  }

  return user
}
