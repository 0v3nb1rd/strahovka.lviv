export const removeTrailingSlash = (str: string): string => {
  return str.endsWith('/') ? str.slice(0, -1) : str
}
