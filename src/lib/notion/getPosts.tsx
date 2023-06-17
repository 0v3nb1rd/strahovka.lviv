import notion from './notion'

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!

const page = 'c50991a72b0740a8b579deb2d3d39650' // parent page
const newsDB = 'f7fb2579c9984cb4962372cfe8b155c2' // news DB page
const servicesDB = '44695582a57f443e8adb557484698075' // services DB page
const cooperationPage = 'cf328ea26d9948c7b56ea7773c914e25' //cooperation page
const contactPage = '5e2c9ba1be24424bb6a8319ceae6e3dc' //contacts page

type RowDB = {
  name: { id: string; title: { text: { content: string } }[] }
  description: { id: string; rich_text: { text: { content: string } }[] }
  media: { id: string; files: { file: { url: string } }[] }
  created_by?: { id: string; title: { text: { content: string } }[] }
  created_time: { id: string; created_time: { created_time: Date } }
  updated_time?: { id: string; title: { text: { content: Date } }[] }
}

export const getPosts = async () => {
  const query = await notion.databases.query({
    database_id: newsDB,
  })

  // @ts-ignore
  const rows: RowDB[] = query.results.map((res) => res.properties)

  const rowsStructure = rows.map((row) => ({
    name: row.name.title[0].text.content,
    description: row.description.rich_text[0].text.content,
    media: row.media.files[0].file.url,
    // created_time: row.created_time.created_time,
  }))

  return rowsStructure
}
