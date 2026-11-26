/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // sanitize-html (CJS) requires ESM-only htmlparser2 & co. Pages API routes load node_modules
  // at runtime with require(), which fails with ERR_REQUIRE_ESM on Node < 22.12 (Vercel
  // functions). transpilePackages bundles them into the route; 'loose' lets webpack resolve
  // the ESM packages from a require() call.
  transpilePackages: [
    'sanitize-html',
    'htmlparser2',
    'domhandler',
    'domutils',
    'dom-serializer',
    'domelementtype',
    'entities',
  ],
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'facebook.com',
      },
    ],
  },
  trailingSlash: true,
  // i18n: {
  //   localeDetection: false,
  //   locales: ['uk', 'en'],
  //   defaultLocale: 'uk',
  // },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/image/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/favicons/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/icons/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
      {
        source: '/photos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
    ]
  },
  async redirects() {
    return [
      //!------------------- 	Services 	------------------------//
      {
        source: '/sample-page',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/sample-page/avtostrahuvannya',
        destination: '/services/car-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/avtostrahuvannya/:slug',
        destination: '/services/car-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-zdorovya',
        destination: '/services/life-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-zhittya/',
        destination: '/services/life-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-majna',
        destination: '/services/property-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-majna/:slug',
        destination: '/services/property-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/turistichne-strahuvannya',
        destination: '/services/tourist-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-dlya-biznesu',
        destination: '/services/business-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-vidpovidal-nosti',
        destination: '/services/responsibility-insurance',
        permanent: true,
      },
      {
        source: '/sample-page/strahuvannya-domashnih-tvarin',
        destination: '/services/animal-insurance',
        permanent: true,
      },
      //!-------------------  	News 	 			--------------------------//
      {
        source: '/category/news',
        destination: '/blog',
        permanent: true,
      },
      //!-------------------  Cooperation 	--------------------------//
      {
        source: '/spivpratsya',
        destination: '/cooperation',
        permanent: true,
      },
      {
        source: '/spivpratsya/strahovim-agentam',
        destination: '/cooperation',
        permanent: true,
      },
      //!-------------------  Contacts 		 	--------------------------//
      {
        source: '/nashi-kontakti',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/napishit-nam-2',
        destination: '/contacts',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
