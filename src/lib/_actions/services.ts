import { Service_category } from '@prisma/client'
import prisma from '@/lib/prisma'

export async function getServiceCat() {
  try {
    const serviceCat = await prisma.service_category.findMany()
    return { serviceCat }
  } catch (error) {
    return { error }
  }
}
export async function getServiceCatBySlug(slug: string) {
  try {
    const serviceCat = await prisma.service_category.findFirst({
      where: { slug: slug },
    })
    return { serviceCat }
  } catch (error) {
    return { error }
  }
}
export async function getRelatedService(service_cat_id: number) {
  try {
    const service = await prisma.service.findMany({
      include: {
        services_category: true,
      },
      where: {
        services_category_id: service_cat_id,
      },
    })
    return { service }
  } catch (error) {
    return { error }
  }
}

export async function createService(title: string) {
  try {
  } catch (error) {}
}

export async function updateServiceCat(id: number, data: any) {
  try {
    const updServiceCat = await prisma.service_category.update({
      where: { id },
      data: { full_text: data.full_text },
    })
    return { updServiceCat }
  } catch (error) {
    return { error }
  }
}
