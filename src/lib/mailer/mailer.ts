import nodemailer from 'nodemailer'

const email = process.env.EMAIL!
const password = process.env.EMAIL_PASSWORD!

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: 'smtp.gmail.com',
  // port: 587,
  // secure: false,
  auth: {
    user: email,
    pass: password,
  },
})

export const mailOptions = {
  from: email,
  to: email,
}
