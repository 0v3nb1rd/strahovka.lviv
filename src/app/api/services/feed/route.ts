import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import serviceData from '../serviceData.json'
import data from '../../news/data.json'

const prisma = new PrismaClient()

export async function GET(req: Request, res: Response) {
  await prisma.service.deleteMany()
  await prisma.service_category.deleteMany()
  await prisma.news.deleteMany()

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

  await prisma.service.createMany({
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

  await prisma.news.createMany({
    data: data,
  })

  // ! Log data into
  // const allServices = await prisma.service.findMany()
  // const service = await prisma.service_category.findMany()
  // const news = await prisma.service_category.findMany()

  // console.log(allServices, service, news)

  return NextResponse.json({
    message: 'Done.!',
  })
}
