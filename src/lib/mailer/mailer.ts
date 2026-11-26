import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const password = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: email, pass: password },
  // Fail fast instead of hanging the serverless function until its own timeout.
  connectionTimeout: 8000,
  greetingTimeout: 8000,
  socketTimeout: 10000,
})

/** Sends a notification to the agency mailbox. Throws on failure. */
export async function sendAgencyEmail(subject: string, html: string): Promise<void> {
  if (!email || !password) throw new Error('Email is not configured')
  await transporter.sendMail({ from: email, to: email, subject, html })
}
