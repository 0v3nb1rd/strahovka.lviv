// Drizzle schema of the existing database (introspected with `drizzle-kit pull` from the dev
// branch, 27.11.2026). Table and column names are the ones Prisma created; keep them as they are.
// Use the SQL-like API only (select/insert/update…), not `db.query…`: the relational API is
// rewritten in drizzle-orm 1.0, so relations are intentionally not defined here.
import {
  foreignKey,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

// Prisma stored UTC in `timestamp(3)` without time zone; mode 'date' reads it back as UTC Date.
const ts = { precision: 3, mode: 'date' } as const

export const leadStatus = pgEnum('LeadStatus', ['new', 'delivered', 'failed'])
export const leadType = pgEnum('LeadType', ['service', 'contacts', 'subscribe'])

export const serviceCategory = pgTable(
  'Service_category',
  {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    title_ua: text(),
    category: text(),
    category_ua: text(),
    short_text: text(),
    full_text: text(),
    slug: text().notNull(),
    icon_url: text(),
    thumbnail_url: text(),
    image_url: text(),
    created_at: timestamp(ts).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [uniqueIndex('Service_category_slug_key').using('btree', table.slug.asc().nullsLast().op('text_ops'))]
)

export const service = pgTable(
  'Service',
  {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    title_ua: text(),
    short_text: text(),
    full_text: text(),
    icon_url: text(),
    thumbnail_url: text(),
    image_url: text(),
    slug: text().notNull(),
    services_category_id: integer().notNull(),
    created_at: timestamp(ts).default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    uniqueIndex('Service_slug_key').using('btree', table.slug.asc().nullsLast().op('text_ops')),
    foreignKey({
      columns: [table.services_category_id],
      foreignColumns: [serviceCategory.id],
      name: 'Service_services_category_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('restrict'),
  ]
)

export const user = pgTable(
  'User',
  {
    id: serial().primaryKey().notNull(),
    email: text().notNull(),
    name: text(),
    password: text().notNull(),
    role: text(),
  },
  (table) => [uniqueIndex('User_email_key').using('btree', table.email.asc().nullsLast().op('text_ops'))]
)

export const post = pgTable(
  'Post',
  {
    id: serial().primaryKey().notNull(),
    title: text().notNull(),
    title_ua: text(),
    category: text(),
    category_ua: text(),
    short_text: text(),
    full_text: text(),
    icon_url: text(),
    thumbnail_url: text(),
    image_url: text(),
    slug: text().notNull(),
    like_count: integer().notNull(),
    views: integer().notNull(),
    created_at: timestamp(ts).default(sql`CURRENT_TIMESTAMP`),
    author_id: integer().notNull(),
  },
  (table) => [
    uniqueIndex('Post_slug_key').using('btree', table.slug.asc().nullsLast().op('text_ops')),
    foreignKey({
      columns: [table.author_id],
      foreignColumns: [user.id],
      name: 'Post_author_id_fkey',
    })
      .onUpdate('cascade')
      .onDelete('restrict'),
  ]
)

export const lead = pgTable(
  'Lead',
  {
    id: serial().primaryKey().notNull(),
    type: leadType().notNull(),
    payload: jsonb().notNull(),
    source: text(),
    env: text().notNull(),
    status: leadStatus().default('new').notNull(),
    telegramDeliveredAt: timestamp(ts),
    emailDeliveredAt: timestamp(ts),
    attempts: integer().default(0).notNull(),
    lastError: text(),
    idempotencyKey: text().notNull(),
    createdAt: timestamp(ts)
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    // Prisma set this on the client (@updatedAt); the DB has no default or trigger for it.
    updatedAt: timestamp(ts)
      .notNull()
      .$defaultFn(() => new Date())
      .$onUpdate(() => new Date()),
  },
  (table) => [
    uniqueIndex('Lead_idempotencyKey_key').using('btree', table.idempotencyKey.asc().nullsLast().op('text_ops')),
    index('Lead_status_createdAt_idx').using(
      'btree',
      table.status.asc().nullsLast().op('timestamp_ops'),
      table.createdAt.asc().nullsLast().op('timestamp_ops')
    ),
  ]
)

// Row types, named like the Prisma models the components already import.
export type Service_category = typeof serviceCategory.$inferSelect
export type Service = typeof service.$inferSelect
export type User = typeof user.$inferSelect
export type Post = typeof post.$inferSelect
export type Lead = typeof lead.$inferSelect
export type LeadStatus = (typeof leadStatus.enumValues)[number]
export type LeadType = (typeof leadType.enumValues)[number]
