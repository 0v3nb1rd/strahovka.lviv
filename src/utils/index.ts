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
 * Site base URL without a trailing slash (sitemap, Disqus, NextAuth sign-in request).
 * - Vercel production: the project's production domain (strahovka.lviv.ua), not the deployment
 *   URL: that one is temporary, served with noindex, and search engines reject a sitemap using it.
 * - Vercel preview: the stable branch URL, falling back to the deployment URL.
 * - Local: NEXT_PUBLIC_URL or http://localhost:3000.
 * Vercel system env vars are empty when not applicable, hence the `||` chain.
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
