import { readFileSync } from 'node:fs'
import { defineConfig } from 'drizzle-kit'

// Run drizzle-kit with an explicit env file, e.g.
//   node --env-file=.env.development.local node_modules/drizzle-kit/bin.cjs generate
// Use the direct (non-pooled) connection string here.
const url = process.env.DATABASE_URL
if (!url) throw new Error('DATABASE_URL is not set: pass --env-file=<file> to node')

// Guard: refuse the production database unless explicitly allowed. The production host is read
// from .env.local (the file `next build` uses) so it is never written into the public repository.
function productionHost(): string | null {
  try {
    const m = readFileSync('.env.local', 'utf8').match(/^DATABASE_URL\s*=\s*"?([^"\n]+)/m)
    return m ? new URL(m[1]).hostname : null
  } catch {
    return null
  }
}
const host = new URL(url).hostname
if (host === productionHost() && process.env.DRIZZLE_ALLOW_PRODUCTION !== '1') {
  throw new Error(
    `Refusing to run drizzle-kit against the production database (${host}). Set DRIZZLE_ALLOW_PRODUCTION=1 to confirm.`
  )
}
console.log(`drizzle-kit → ${host}`)

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: { url },
  // Prisma's migration history stays in the DB for now; it is not part of the app schema.
  tablesFilter: ['!_prisma_migrations'],
  // Keep DB column names as TypeScript keys (title_ua, like_count…), the same names Prisma exposed.
  introspect: { casing: 'preserve' },
  strict: true,
  verbose: true,
})
