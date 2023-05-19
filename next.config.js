/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'facebook.com'],
  }
  // i18n: {
  //   localeDetection: false,
  //   locales: ['uk', 'en'],
  //   defaultLocale: 'uk',
  // },
}

module.exports = nextConfig
