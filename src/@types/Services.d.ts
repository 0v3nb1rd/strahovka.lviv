// import { Service_category, Service, News } from '@prisma/client'

export type AllServices = {
  id: string
  category: string
  category_ua: string
  date: string
  title: string
  slug: string
  short_text: string
  full_text: string
  thumbnail_url: string
  image_url: string
}
export type MainServices = {
  id: number
  title_ua?: string
  short_text?: string
  icon_url?: string
}
/**
 * All Service Data.
 */
export interface ServiceProps {
  top: MainServices[]
  all: AllServices[]
}
