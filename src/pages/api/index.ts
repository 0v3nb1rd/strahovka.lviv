import { mailOptions, transporter } from '@/lib/mailer/mailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req
  console.log(method, body)

  if (method === 'POST') {
    const data = await req.body
    if (!data.title || !data.fullName || !data.phone) {
      return res.status(400).json({ message: 'Invalid input data' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Заявка на ' + data.title,
        // text: 'This is a test string',
        html: `
					<h1>послуга - ${data.title}</h1>
					<div style="font-size:18px;">
						<p><b>імя: </b> ${data.fullName}</p>
						<p><b>телефон:</b> <a target="_blank" href="tel:${data.phone}">${data.phone}</a></p>
					</div>
					`,
      })
      return res.status(200).json({ success: 'true' })
    } catch (err) {
      console.log(err)
    }
  }

  res.status(400).json({ message: 'Bed request' })
}
