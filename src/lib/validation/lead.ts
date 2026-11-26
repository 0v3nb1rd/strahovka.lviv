import * as yup from 'yup'
import 'yup-phone-lite'

import { contactSchema, orderSchema, subscribeSchema } from './schema'

// Server-side schema of POST /api/mailer. Field rules come from the same schemas the forms use;
// here they get length limits and the request envelope (form type, anti-duplicate key, captcha).

const text = (max: number) => yup.string().trim().max(max)

const envelope = {
  idempotencyKey: yup.string().strict().min(8).max(100).required(),
  captcha: yup.string().strict().min(1).max(4000).required(),
  source: text(300).optional(),
  // Honeypot: hidden in the form, real users leave it empty. Checked in the handler, not here,
  // so a bot gets the same 200 as a person and learns nothing.
  website: text(500).optional(),
}

export const leadRequestSchemas = {
  form_service: orderSchema.shape({
    ...envelope,
    title: text(200).required(),
    fullName: text(100).required(),
    message: text(2000).optional(),
  }),
  form_contacts: contactSchema.shape({
    ...envelope,
    fullName: text(100).required(),
    email: text(254).email().required(),
    message: text(2000).required(),
  }),
  form_subscribe: subscribeSchema.shape({
    ...envelope,
    email: text(254).email().required(),
  }),
} as const

export type LeadAction = keyof typeof leadRequestSchemas

export const isLeadAction = (v: unknown): v is LeadAction =>
  typeof v === 'string' && Object.prototype.hasOwnProperty.call(leadRequestSchemas, v)
