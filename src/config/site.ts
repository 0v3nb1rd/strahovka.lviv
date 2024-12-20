import { StaticImageData } from 'next/image'
import person1 from '@/assets/photos/person1.jpg'
import person2 from '@/assets/photos/person2.png'
import person3 from '@/assets/photos/person3.png'

export type TTeam = {
  img: StaticImageData
  name: string
  position: string
  description?: string
  socialLinks: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
    github?: string
  }
}
export interface ISiteConfig {
  siteName: string
  logo_src: string
  description: string
  socialLinks: {
    facebook: string
    instagram: string
    twitter: string
    youtube: string
  }
  copyright: string
	ourTeam: TTeam[]
	contacts: {
		phones: string[]
		email: string
		address: string
	}
}

const siteConfig: ISiteConfig = {
  siteName: 'STRAHOVKA',
  logo_src: '/logo_old.svg',
	description: '',
	contacts: {
		phones: ['+380687678898'],
		email: 'strahovka.lviv.ua@gmail.com',
		address: 'м.Пустомити, 79100 \n Львівська обл.',
	},
  socialLinks: {
    facebook: 'https://www.facebook.com/offroadfwd',
    twitter: 'https://twitter.com/home',
    instagram: 'https://www.instagram.com/offroadfwd/',
    youtube: 'https://www.youtube.com/channel/UCVvMfGGYlCFiP9gDvOiESEw',
  },
  copyright: '© 2025 strahovka.lviv.ua',
  ourTeam: [
    {
      name: 'Володимир',
      img: person1,
      position: 'Chief Executive Officer',
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      socialLinks: {
        facebook: 'https://www.facebook.com/offroadfwd',
        instagram: 'https://www.instagram.com/offroadfwd/',
        twitter: 'https://twitter.com/home',
        youtube: '',
        github: '',
      },
    },
    {
      name: "Мар'яна",
      img: person2,
      position: 'Product Design Head',
      description:
        'The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100015554864818',
        instagram: 'https://www.instagram.com/strannica21/',
        twitter: 'https://twitter.com/home',
        youtube: '',
        github: '',
      },
    },
    {
      name: 'Назар',
      img: person3,
      position: 'Full-stack Development',
      description:
        'Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.',
      socialLinks: {
        facebook: 'https://www.facebook.com/0v3nb1rd',
        instagram: 'https://www.instagram.com/0v3nb1rd/',
        twitter: '',
        youtube: '',
        github: 'https://github.com/0v3nb1rd/',
      },
    },
  ],
}

export default siteConfig
