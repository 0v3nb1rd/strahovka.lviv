/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'facebook.com'],
  },
  async headers() {
    return [
      {
        // Sets security headers for all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
  // i18n: {
  //   localeDetection: false,
  //   locales: ['uk', 'en'],
  //   defaultLocale: 'uk',
  // },
}

module.exports = nextConfig
