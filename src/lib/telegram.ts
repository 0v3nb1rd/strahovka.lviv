import TelegramBot from 'node-telegram-bot-api'

const token = process.env.TELEGRAM_TOKEN!
const id = process.env.TELEGRAM_ID!

export const useTelegramBot = async (data: any) => {
  const bot = new TelegramBot(token)
  await bot.sendMessage(id, data, { parse_mode: 'HTML' })
  return 'OK'
}
