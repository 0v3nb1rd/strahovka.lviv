// Server-side check of a reCAPTCHA v2 token (the widget in the forms only produces it).

export async function verifyRecaptcha(token: string, remoteIp?: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) throw new Error('RECAPTCHA_SECRET_KEY is not set')

  const params = new URLSearchParams({ secret, response: token })
  if (remoteIp) params.set('remoteip', remoteIp)

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: params,
    signal: AbortSignal.timeout(5000),
  })
  if (!res.ok) throw new Error(`reCAPTCHA verify ${res.status}`)
  const data: { success?: boolean } = await res.json()
  return data.success === true
}
