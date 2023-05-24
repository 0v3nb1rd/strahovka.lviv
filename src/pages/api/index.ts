// import { mailOptions, transporter } from '@/lib/mailer/mailer'
// import { useTelegramBot } from '@/lib/telegram'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query, body } = req

  if (method === 'POST') {
    // const data = await req.body
    // if (!data.title || !data.fullName || !data.phone) {
    //   return res.status(400).json({ message: 'Invalid input data' })
    // }

    // try {
    //   await transporter.sendMail({
    //     ...mailOptions,
    //     subject: 'Заявка на ' + data.title,
    //     // text: 'This is a test string',
    //     html: `
    // 			<h1>послуга - ${data.title}</h1>
    // 			<div style="font-size:18px;">
    // 				<p><b>імя: </b> ${data.fullName}</p>
    // 				<p><b>телефон:</b> <a target="_blank" href="tel:${data.phone}">${data.phone}</a></p>
    // 			</div>
    // 			`,
    //   })

    //   const tg = await useTelegramBot(
    //     `<i>послуга</i>: ${data.title}\n\<i>імя</i>: ${data.fullName}\n\<i>тел</i>: ${data.phone}`
    //   )

    res.status(200).json({ method })
    // } catch (err) {
    //   console.log(err)
    // }

    // try {
    // } catch (error) {}
  }

  return res.status(200).json({ method })
}
