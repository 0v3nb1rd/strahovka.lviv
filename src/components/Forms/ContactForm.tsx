'use client'

import { useState, useRef } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form, Button } from '../UI'
import Filed from './Filed'
import { contactSchema } from '@/lib/validation/schema'
import { newIdempotencyKey, sendContactForm, SendResult } from '@/lib/api'
import { FormStatus, Honeypot } from './LeadFormParts'

type FormValues = {
  fullName?: string
  phone?: string
  email?: string
  message?: string
}

export default function ContactForm({ className, ...rest }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState<string | null>()
  const [result, setResult] = useState<SendResult | null>(null)

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)
  // Lazily created on the client (crypto.randomUUID is not used during SSR).
  const idempotencyKey = useRef('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver<FormValues>(contactSchema),
  })

  const onSubmit = async (data: FormValues) => {
    if (!captcha) {
      setResult({ ok: false, message: 'Підтвердіть, що ви не робот.' })
      return
    }

    setLoading(true)
    if (!idempotencyKey.current) idempotencyKey.current = newIdempotencyKey()
    const res = await sendContactForm('form_contacts', data, {
      captcha,
      idempotencyKey: idempotencyKey.current,
      website: honeypotRef.current?.value,
    })
    setResult(res)
    setLoading(false)

    // reCAPTCHA tokens are single-use: reset the widget after every attempt.
    recaptchaRef.current?.reset()
    setCaptcha(null)
    if (res.ok) {
      reset()
      idempotencyKey.current = ''
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="flex flex-col gap-6">
        <Filed register={register} errors={errors?.fullName} fieldName="fullName" label="Ваше ім'я" required />
        <Filed register={register} errors={errors?.phone} fieldName="phone" label="Телефон" required />
        <Filed register={register} inputType="email" errors={errors?.email} fieldName="email" label="Email" required />
        <Filed
          register={register}
          errors={errors?.message}
          fieldName="message"
          textarea
          label="Ваше повідомлення"
          required
        />
      </div>
      <Honeypot ref={honeypotRef} />

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
        size="normal"
        className="mt-4"
        onChange={setCaptcha}
        onExpired={() => setCaptcha(null)}
        ref={recaptchaRef}
      />

      <Button disabled={!isValid || loading} className={`btn-secondary btn-wide mt-8 ${loading ? 'loading' : ''}`}>
        Відправити
      </Button>
      <FormStatus result={result} className="mt-4" />
    </Form>
  )
}
