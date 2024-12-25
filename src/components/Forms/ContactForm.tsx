'use client'

import { useState, useRef } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form, Button } from '../UI'
import Filed from './Filed'
import { contactSchema } from '@/lib/validation/schema'
import { sendContactForm } from '@/lib/api'

type FormValues = {
  fullName?: string
  phone?: string
  email?: string
  message?: string
}

export default function ContactForm({ className, ...rest }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState<string | null>()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

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
      console.error('Please verify that you are not a robot')
      return
    }

    setLoading(true)

    const senderData = { ...data, title: 'Контакт форма', action: 'form_contacts' }
    const res = await sendContactForm(senderData)

    recaptchaRef.current?.reset()
    setCaptcha(null)
    setLoading(false)
    reset()

    // alert(JSON.stringify(data))
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
    </Form>
  )
}
