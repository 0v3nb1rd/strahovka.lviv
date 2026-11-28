// Roles allowed into the admin area. Kept free of DB imports because middleware (Edge runtime) imports it.
export const ADMIN_ROLES = ['admin', 'dev'] as const

export const isAdminRole = (role: unknown): boolean =>
  typeof role === 'string' && (ADMIN_ROLES as readonly string[]).includes(role)
