export const removeTrailingSlash = (str: string): string => {
  return str.endsWith('/') ? str.slice(0, -1) : str
}

export const addTrailingSlash = (str: string): string => {
  return str.endsWith('/') ? str : str + '/'
}

const IS_SERVER = typeof window === 'undefined'
export function getURL(path: string) {
  const baseURL = IS_SERVER ? (process.env.NEXT_PUBLIC_URL || 'http://localhost:3000') : window.location.origin
  return new URL(path, baseURL).toString()
}

const withHttps = (host?: string) => (host ? `https://${host}` : '')

/**
 * Базова адреса сайту без кінцевого слеша (sitemap, Disqus, запит входу NextAuth).
 * - Production на Vercel: основний домен проєкту (strahovka.lviv.ua). Не адреса конкретного
 *   деплою: вона тимчасова, має noindex, і sitemap з нею пошуковики відкидають.
 * - Preview на Vercel: постійна адреса гілки, запасний варіант — адреса деплою.
 * - Локально: NEXT_PUBLIC_URL або http://localhost:3000.
 * Системні змінні Vercel порожні, коли не застосовні, тому ланцюжок через `||`.
 */
function resolveBaseUrl(): string {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV

  if (vercelEnv === 'production') {
    return (
      withHttps(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ||
      process.env.NEXT_PUBLIC_URL ||
      'https://strahovka.lviv.ua'
    )
  }

  if (vercelEnv === 'preview') {
    return (
      withHttps(process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) ||
      withHttps(process.env.NEXT_PUBLIC_VERCEL_URL) ||
      process.env.NEXT_PUBLIC_URL ||
      'http://localhost:3000'
    )
  }

  return process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
}

export const baseUrl = removeTrailingSlash(resolveBaseUrl())
