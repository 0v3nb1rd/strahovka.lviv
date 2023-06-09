import { PrismaClient, Service_category } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma

////////////////////////////////////////////////////////////////////////
//! Server actions:
////////////////////////////////////////////////////////////////////////

export async function getServices(): Promise<Service_category[] | void> {
  try {
    const res = await prisma.service_category.findMany()
    return res
  } catch (error) {
    return console.log(error)
  }
}

export async function createService(title: string) {
  try {
  } catch (error) {}
}

export async function updateService() {
  try {
  } catch (error) {}
}
