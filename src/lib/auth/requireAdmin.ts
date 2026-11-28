import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { eq } from 'drizzle-orm'

import { db } from '@/lib/db'
import { user as userTable } from '@/db/schema'
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

  const [user] = await db
    .select({ id: userTable.id, role: userTable.role })
    .from(userTable)
    .where(eq(userTable.email, email))
  if (!user || !isAdminRole(user.role)) {
    res.status(403).json({ error: 'Forbidden' })
    return null
  }

  return user
}
