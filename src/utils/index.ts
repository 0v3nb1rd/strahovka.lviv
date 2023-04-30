export const removeTrailingSlash = (str: string): string => {
  return str.endsWith('/') ? str.slice(0, -1) : str
}

const IS_SERVER = typeof window === 'undefined'
export default function getURL(path: string) {
  const baseURL = IS_SERVER ? process.env.NEXT_PUBLIC_URL! : window.location.origin
  return new URL(path, baseURL).toString()
}
