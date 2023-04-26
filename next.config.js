/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'picsum.photos'],
  },
  i18n: {
    localeDetection: false,
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
  },
}

module.exports = nextConfig
