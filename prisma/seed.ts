import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

import serviceData from '../prisma/serviceData.json'
import newsData from '../prisma/newsData.json'

const prisma = new PrismaClient()

async function main() {
  // Removing old data:
  await prisma.user.deleteMany()
  await prisma.service.deleteMany()
  await prisma.service_category.deleteMany()
  await prisma.post.deleteMany()

  // Create Service_category:
  await prisma.service_category.createMany({
    data: serviceData.all,
  })

  // Create relationship with service:
  const service_category = await prisma.service_category.findMany()

  const CarInsurance = service_category.find((itm) => itm.slug === 'car-insurance')?.id || 1
  const LifeInsurance = service_category.find((itm) => itm.slug === 'life-insurance')?.id || 1
  const PropertyInsurance = service_category.find((itm) => itm.slug === 'property-insurance')?.id || 1
  const TouristInsurance = service_category.find((itm) => itm.slug === 'tourist-insurance')?.id || 1
  const BusinessInsurance = service_category.find((itm) => itm.slug === 'business-insurance')?.id || 1
  const ResponsibilityInsurance = service_category.find((itm) => itm.slug === 'responsibility-insurance')?.id || 1
  const AnimalInsurance = service_category.find((itm) => itm.slug === 'animal-insurance')?.id || 1

  // Create Service:
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

  // Create relationship with user:
  const user = await prisma.user.findMany()
  const Dev = user.find((itm) => itm.role === 'dev')?.id || 1
  const Admin = user.find((itm) => itm.role === 'admin')?.id || 1

  // Create Post:
  const post = await prisma.post.createMany({
    // data: newsData,
    data: [
      {
        category: 'news',
        category_ua: 'Новини',
        title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єр",
        title_ua: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єр",
        slug: 'v-ukrayini-v-2016-rotsi-potribno-vvesti-medstrakhuvannya-vsikh-gromadyan-premier',
        short_text: '',
        full_text:
          "<q className='quote'><p>На сайте Всемирной организации здравоохранения <a href='https://web.archive.org/web/20220731213557/' rel='nofollow noreferrer noopener' target='_blank'>указано</a>, что синдром Гийена-Барре — это редкое состояние, при котором иммунная система человека поражает собственные периферические нервы. Тяжелые случаи синдрома способны привести к полному параличу и несут потенциальную угрозу для жизни. Несмотря на это, большинство людей полностью выздоравливает даже в самых тяжёлых ситуациях, отмечает ВОЗ.</p></q>",
        thumbnail_url: '/photos/news/img_1.jpg',
        image_url: '/photos/news/img_1.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
      {
        category: 'news',
        category_ua: 'Новини',
        title: 'Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року',
        title_ua: 'Автомобілістам росії доведеться замінити всі поліси ОСАЦВ з 1 липня 2016 року',
        slug: 'avtomobilistam-rosiyi-dovedetsya-zaminiti-vsi-polisi-osatsv-z-1-lipnya-2016-roku',
        short_text: '',
        full_text: 'lorem ipsum dolor sit amet, <br/> consectetur <b>adip</b>',
        thumbnail_url: '/photos/news/img_2.jpg',
        image_url: '/photos/news/img_2.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
      {
        category: 'news',
        category_ua: 'Новини',
        title: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС',
        title_ua: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄС',
        slug: 'limiti-po-osatsv-v-ukrayini-budut-privedeni-do-standartiv-ies',
        short_text: '',
        full_text: 'lorem ipsum dolor sit amet, consectetur adip',
        thumbnail_url: '/photos/news/img_3.jpg',
        image_url: '/photos/news/img_3.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
      {
        category: 'news',
        category_ua: 'Новини',
        title: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄСC',
        title_ua: 'Ліміти по ОСАЦВ в Україні будуть приведені до стандартів ЄСC',
        slug: 'iti-po-osatsv-v-ukrayini-budut-privedeni-do-standartiv-iesc',
        short_text: '',
        full_text: 'lorem ipsum dolor sit amet, consectetur adip',
        thumbnail_url: '/photos/news/img_4.jpg',
        image_url: '/photos/news/img_4.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
      {
        category: 'news',
        category_ua: 'Новини',
        title: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єрр",
        title_ua: "В Україні в 2016 році потрібно ввести медстрахування всіх громадян - прем'єрр",
        slug: 'v-ukrayini-v-2016-rotsi-potribno-vvesti-medstrakhuvannya-vsikh-gromadyan-premierr',
        short_text: '',
        full_text: 'lorem ipsum dolor sit amet, consectetur adip',
        thumbnail_url: '/photos/news/img_1.jpg',
        image_url: '/photos/news/img_1.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
      {
        category: 'tips',
        category_ua: 'Поради',
        title: 'Автоцивілка отримає новий рівень захисту QR-код',
        title_ua: 'Автоцивілка отримає новий рівень захисту QR-код',
        slug: 'avtocivilka-otrimaye-novij-rivenь-zahistu-qr-kod',
        short_text: '',
        full_text:
          'Президія МТСБУ вирішила ввести в обіг новий поліс автоцивільної відповідальності, який буде містити спеціальний елемент захисту від підробок — QR-код.',
        thumbnail_url: '/photos/news/img_5.jpg',
        image_url: '/photos/news/img_5.jpg',
        like_count: 0,
        views: 0,
        author_id: Dev,
      },
    ],
  })

  console.log({ user, services, post })
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
