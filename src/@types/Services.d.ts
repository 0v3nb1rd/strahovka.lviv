export type AllServices = {
  id: string
  category_en: string
  category_ua: string
  date: string
  title: string
  slug: string
  short_text: string
  full_text: string
  thumbnail_url: string
  img_url: string
}
export type MainServices = {
  id?: string
  title?: string
  desc?: string
  icon_url?: string
}
/**
 * All Service Data.
 */
export interface ServiceProps {
  mainCards: MainServices
  allCards: AllServices
}
