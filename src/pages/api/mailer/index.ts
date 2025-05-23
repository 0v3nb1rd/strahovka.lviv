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

    if (data.action === 'form_service') {
      if (!data.title || !data.fullName || !data.phone) {
        return res.status(400).json({ message: 'Invalid input data' })
      }

      try {
        const [resTg, resMail] = await Promise.all([
					useTelegramBot(`
						<i>послуга</i>: ${data.title}\n\
						<i>імя</i>: ${data.fullName}\n\
						<i>тел</i>: ${data.phone}\n\
						<i>текст</i>: ${data?.message}
					`),
          transporter.sendMail({
            ...mailOptions,
            subject: 'Заявка на ' + data.title,
            html: `
						<h2>послуга - ${data.title}</h2>
						<div style="font-size:18px;">
							<p><i>імя</i>: ${data.fullName}</p>
							<p><i>тел</i>: <a href="tel:${data.phone}">${data.phone}</a></p>
							<p><i>текст</i>: ${data?.message}</p>
						</div>
        		`,
          }),
        ])

        return res.status(200).json({ resTg, resMail })
      } catch (err) {
        console.log(err)
      }
		}
		
    if (data.action === 'form_contacts') {
      if (!data.title || !data.fullName || !data.phone) {
        return res.status(400).json({ message: 'Invalid input data' })
      }

      try {
        const [resTg, resMail] = await Promise.all([
          useTelegramBot(
            `<b>${data.title}</b>\n\<i>імя</i>: ${data.fullName}\n\<i>тел</i>: ${data.phone}\n\<i>email</i>: ${data.email}\n\<i>текст</i>: ${data.message}`
          ),
          transporter.sendMail({
            ...mailOptions,
            subject: data.title,
            html: `
					<h2>${data.title}</h2>
					<div style="font-size:18px;">
						<p><i>імя</i>: ${data.fullName}</p>
						<p><i>тел</i>: <a href="tel:${data.phone}">${data.phone}</a></p>
						<p><i>email</i>: <a href="mailto:${data.email}">${data.email}</a></p>
						<p><i>текст</i>: ${data.message}</p>
					</div>
					`,
          }),
        ])

        return res.status(200).json({ resTg, resMail })
      } catch (err) {
        console.log(err)
      }
		}
		
    if (data.action === 'form_subscribe') {
      if (!data.email) {
        return res.status(400).json({ message: 'Invalid input data' })
      }

      try {
        const [resTg, resMail] = await Promise.all([
          useTelegramBot(`<b>${data.title}</b>\n\<i>email</i>: ${data.email}`),
          transporter.sendMail({
            ...mailOptions,
            subject: data.title,
            html: `
      		<h2>${data.title}</h2>
      		<div style="font-size:18px;">
      			<p><i>email</i>: <a href="mailto:${data.email}">${data.email}</a></p>
      		</div>
      		`,
          }),
        ])

        return res.status(200).json({ resTg, resMail })
      } catch (err) {
        console.log(err)
      }
    }
  }

  res.status(400).json({ message: 'Bed request' })
}
