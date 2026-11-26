import { withAuth } from 'next-auth/middleware'

import { isAdminRole } from '@/lib/auth/roles'

// No session or a role outside ADMIN_ROLES → redirect to the NextAuth sign-in page.
export default withAuth({
  callbacks: {
    authorized: ({ token }) => isAdminRole(token?.role),
  },
})

export const config = { matcher: ['/adm/:path*'] }
