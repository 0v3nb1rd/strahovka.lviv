import { PrismaClient } from '@prisma/client'

import serviceData from './serviceData.json'
import newsData from './newsData.json'

const prisma = new PrismaClient()

async function main() {
  // const alice = await prisma.user.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })

  await prisma.service_category.createMany({
    data: serviceData.all,
  })

  const service_category = await prisma.service_category.findMany()

  const CarInsurance = service_category.find((itm) => itm.slug === 'car-insurance')?.id || 1
  const LifeInsurance = service_category.find((itm) => itm.slug === 'life-insurance')?.id || 1
  const PropertyInsurance = service_category.find((itm) => itm.slug === 'property-insurance')?.id || 1
  const TouristInsurance = service_category.find((itm) => itm.slug === 'tourist-insurance')?.id || 1
  const BusinessInsurance = service_category.find((itm) => itm.slug === 'business-insurance')?.id || 1
  const ResponsibilityInsurance = service_category.find((itm) => itm.slug === 'responsibility-insurance')?.id || 1
  const AnimalInsurance = service_category.find((itm) => itm.slug === 'animal-insurance')?.id || 1

  const services = await prisma.service.createMany({
    data: [
      {
        title: 'Autocivilka',
        title_ua: 'Автоцивілка',
        short_text: 'Безпека вашого авто та грошей.',
        icon_url: '/icons/man-driving.svg',
        slug: 'autocivilka',
        services_category_id: CarInsurance,
      },
      {
        title: 'Green card',
        title_ua: 'Зелена карта',
        short_text: 'Комфортні подорожі за кордоном.',
        icon_url: '/icons/car-new.svg',
        slug: 'green-card',
        services_category_id: CarInsurance,
      },
      {
        title: 'KASKO',
        title_ua: 'КАСКО',
        short_text: 'Захистіть свій автомобіль від будь-яких небезпек.',
        icon_url: '/icons/insurance-user.svg',
        slug: 'kasko',
        services_category_id: CarInsurance,
      },
    ],
  })

  const news = await prisma.news.createMany({
    data: newsData,
  })

  console.log({ services, news })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
