// Telegram Bot API via fetch: no SDK needed for a single sendMessage call.
// Throws on any failure so the caller can record the error and retry later.

const TIMEOUT_MS = 8000

export async function sendTelegramMessage(html: string): Promise<void> {
  const token = process.env.TELEGRAM_TOKEN
  const chatId = process.env.TELEGRAM_ID
  if (!token || !chatId) throw new Error('Telegram is not configured')

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: html, parse_mode: 'HTML', disable_web_page_preview: true }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  if (!res.ok) {
    // Telegram returns { description } on errors; never include the token (it is in the URL).
    const body = await res.json().catch(() => null)
    throw new Error(`Telegram ${res.status}: ${body?.description ?? 'request failed'}`)
  }
}
