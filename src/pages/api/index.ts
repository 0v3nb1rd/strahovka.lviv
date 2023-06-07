// import { mailOptions, transporter } from '@/lib/mailer/mailer'
// import { useTelegramBot } from '@/lib/telegram'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    res.status(200).json({ method })
    
  }

  return res.status(200).json({ method })
}
