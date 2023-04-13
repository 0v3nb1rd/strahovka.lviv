/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'picsum.photos'],
  },
}

module.exports = nextConfig
