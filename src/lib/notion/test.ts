// import { Client, LogLevel } from '@notionhq/client'

import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
})

type RowDB = {
  name: { id: string; title: { text: { content: string } }[] }
  description: { id: string; rich_text: { text: { content: string } }[] }
  media: { id: string; files: { file: { url: string } }[] }
  created_by?: { id: string; title: { text: { content: string } }[] }
  created_time: { id: string; created_time: { created_time: Date } }
  updated_time?: { id: string; title: { text: { content: Date } }[] }
}

type RowPage = {}

const NOTION_TOKEN = process.env.NOTION_TOKEN!
const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID!
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!

// const notion = new Client({ auth: NOTION_TOKEN, logLevel: LogLevel.DEBUG })

// export const getPages = async (pageId?: string) => {
//   pageId = pageId || NOTION_PAGE_ID
//   if (!NOTION_TOKEN || !NOTION_PAGE_ID) throw new Error('Missing notion secret or PAGE-ID')

//   const query = await notion.pages.retrieve({ page_id: pageId })

//   // @ts-ignore
//   // const rows = query.properties.title.map((row) => ({
//   //   row,
//   // }))

//   return query.properties.title.title[0]
// }

// export const getDatabase = async (database_id?: string) => {
//   database_id = database_id || NOTION_DATABASE_ID
//   if (!NOTION_TOKEN || !NOTION_DATABASE_ID) throw new Error('Missing notion secret or DB-ID')

//   const query = await notion.databases.query({
//     database_id: database_id,
//   })

//   // @ts-ignore
//   const rows: Row[] = query.results.map((res) => res.properties)

//   const rowsStructure = rows.map((row) => ({
//     name: row.name.title[0].text.content,
//     description: row.description.rich_text[0].text.content,
//     media: row.media.files[0].file.url,
//     // created_time: row.created_time.created_time,
//   }))

//   return rowsStructure
// }

export const getMDPage = async (target_page_id?: string) => {
  // let res = await notion.getPage('c50991a72b0740a8b579deb2d3d39650')
  let res = await notion.getPage('cf328ea26d9948c7b56ea7773c914e25')
  return res
}
