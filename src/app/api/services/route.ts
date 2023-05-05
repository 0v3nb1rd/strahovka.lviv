import { NextResponse } from 'next/server'

import serviceData from './serviceData.json'

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')

  if (slug) {
    const serviceItem = serviceData.all.find((item) => item.slug === slug)
    return NextResponse.json(serviceItem)
  }

  return NextResponse.json(serviceData)
}
