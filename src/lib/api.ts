import siteConfig from '@/config/site'

export type LeadAction = 'form_service' | 'form_contacts' | 'form_subscribe'

export type SendResult = { ok: true } | { ok: false; message: string }

/** A fresh key per form session: a double click or retry with the same key stores one lead. */
export const newIdempotencyKey = (): string => crypto.randomUUID()

const phone = siteConfig.contacts.phones[0]

/**
 * Sends a form to POST /api/mailer. Never throws: returns a message to show the user.
 * The server answers 200 as soon as the lead is stored, even if Telegram/email delivery failed.
 */
export async function sendContactForm(
  action: LeadAction,
  fields: Record<string, string | undefined>,
  meta: { captcha: string; idempotencyKey: string; website?: string }
): Promise<SendResult> {
  try {
    const res = await fetch('/api/mailer/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...fields, ...meta, action, source: window.location.pathname }),
    })
    if (res.ok) return { ok: true }

    const body = await res.json().catch(() => null)
    if (res.status === 400 && body?.error === 'Captcha failed') {
      return { ok: false, message: 'Підтвердіть, що ви не робот, і надішліть ще раз.' }
    }
    if (res.status === 400) return { ok: false, message: 'Перевірте заповнені поля і надішліть ще раз.' }
  } catch {
    // network error: fall through to the phone message
  }
  return { ok: false, message: `Не вдалося надіслати заявку. Зателефонуйте нам: ${phone}` }
}

export const SUCCESS_MESSAGE = "Дякуємо! Заявку отримано, ми зв'яжемося з вами найближчим часом."
