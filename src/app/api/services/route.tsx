import { NextResponse } from 'next/server'
// import { v4 as uuid } from 'uuid'

import serviceData from './serviceData.json'

export const GET = async (req: Request) => {
  return NextResponse.json(serviceData)
}
