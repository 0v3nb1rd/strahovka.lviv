/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    // domains: ['picsum.photos', 'www.notion.so', 's3.us-west-2.amazonaws.com', 'facebook.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'facebook.com',
      },
    ],
  },
  trailingSlash: true,
  swcMinify: false,
  // i18n: {
  //   localeDetection: false,
  //   locales: ['uk', 'en'],
  //   defaultLocale: 'uk',
  // },

  // suppress keyv warning
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/\/keyv\//, (data) => {
        delete data.dependencies[0].critical
        return data
      })
    )

    return config
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
