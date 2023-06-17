import { Client, LogLevel } from '@notionhq/client'

const NOTION_TOKEN = process.env.NOTION_TOKEN!
const NOTION_TOKEN_V2 = process.env.NOTION_TOKEN_V2!
const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID!
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  // logLevel: LogLevel.DEBUG,
})

export default notion
