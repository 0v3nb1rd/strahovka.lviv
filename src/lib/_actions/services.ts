import { asc, eq } from 'drizzle-orm'

import { db } from '@/lib/db'
import { service, serviceCategory } from '@/db/schema'
import { sanitizeInline } from '@/lib/sanitize'

export async function getServiceCat() {
  try {
    const serviceCat = await db.select().from(serviceCategory).orderBy(asc(serviceCategory.id))
    return { serviceCat }
  } catch (error) {
    return { error }
  }
}
export async function getServiceCatBySlug(slug: string) {
  try {
    const [serviceCat = null] = await db.select().from(serviceCategory).where(eq(serviceCategory.slug, slug)).limit(1)
    return { serviceCat }
  } catch (error) {
    return { error }
  }
}
export async function getRelatedService(service_cat_id: number) {
  try {
    const rows = await db
      .select()
      .from(service)
      .where(eq(service.services_category_id, service_cat_id))
      .orderBy(asc(service.id))
    return { service: rows }
  } catch (error) {
    return { error }
  }
}

export async function updateServiceCat(id: number, data: { full_text?: string | null }) {
  try {
    const [updServiceCat] = await db
      .update(serviceCategory)
      .set({ full_text: data.full_text })
      .where(eq(serviceCategory.id, id))
      .returning()
    if (!updServiceCat) throw new Error(`Service_category ${id} not found`)
    return { updServiceCat }
  } catch (error) {
    return { error }
  }
}

export async function updService({ id, data }: { id: number; data: { title: string } }) {
  try {
    const [serviceCat] = await db
      .update(serviceCategory)
      .set({ title: sanitizeInline(data.title) })
      .where(eq(serviceCategory.id, id))
      .returning()
    if (!serviceCat) throw new Error(`Service_category ${id} not found`)
    return { serviceCat }
  } catch (error) {
    return { error }
  }
}
