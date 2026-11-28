import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

// Neon over HTTP: every query is a stateless fetch, so there is no pool to keep in `global`
// between hot reloads. The driver has no interactive transactions; use `db.batch([...])` when
// several statements must succeed or fail together.
const url = process.env.DATABASE_URL
if (!url) throw new Error('DATABASE_URL is not set')

export const db = drizzle({ client: neon(url) })
