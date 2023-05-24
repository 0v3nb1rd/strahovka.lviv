import { NextApiRequest, NextApiResponse } from 'next'

import { mailOptions, transporter } from '@/lib/mailer/mailer'
import { useTelegramBot } from '@/lib/telegram'

import type { ServiceFormValues } from '@/components/Modal/Modal'

interface ServiceProps extends ServiceFormValues {
  action: string
  title: string
  email?: string
  message?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { method, query, body } = req

  if (req.method === 'POST') {
    const data: ServiceProps = await req.body

    if (!data.title || !data.fullName || !data.phone) {
      return res.status(400).json({ message: 'Invalid input data' })
    }

    if (data.action === 'form_service') {
      try {
        const tg = await useTelegramBot(
          `<i>послуга</i>: ${data.title}\n\<i>імя</i>: ${data.fullName}\n\<i>тел</i>: ${data.phone}`
        )

        // await transporter.sendMail({
        //   ...mailOptions,
        //   subject: 'Заявка на ' + data.title,
        //   // text: 'This is a test string',
        //   html: `
        // 	<h2>послуга - ${data.title}</h2>
        // 	<div style="font-size:18px;">
        // 		<p><i>імя</i>: ${data.fullName}</p>
        // 		<p><i>тел</i>: <a href="tel:${data.phone}">${data.phone}</a></p>
        // 	</div>
        // 	`,
        // })

        return res.status(200).json({ success: 'mail success', tg })
      } catch (err) {
        console.log(err)
      }
    }
    if (data.action === 'form_contacts') {
      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: data.title,
          // text: 'This is a test string',
          html: `
					<h2>${data.title}</h2>
					<div style="font-size:18px;">
						<p><i>імя</i>: ${data.fullName}</p>
						<p><i>тел</i>: <a href="tel:${data.phone}">${data.phone}</a></p>
						<p><i>email</i>: <a href="mailto:${data.email}">${data.email}</a></p>
						<p><i>текст</i>: ${data.message}</p>
					</div>
					`,
        })

        const tg = await useTelegramBot(
          `<b>${data.title}</b>\n\<i>імя</i>: ${data.fullName}\n\<i>тел</i>: ${data.phone}\n\<i>email</i>: ${data.email}\n\<i>текст</i>: ${data.message}`
        )

        return res.status(200).json({ success: 'mail success', tg })
      } catch (err) {
        console.log(err)
      }
    }
  }

  res.status(400).json({ message: 'Bed request' })
}
