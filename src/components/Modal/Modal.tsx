'use client'

import React, { useEffect, useRef, useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form } from '../UI'
import Badge from '@/components/Badge'
import Image from 'next/image'
import Button from '../UI/Button'
import Filed from '../Forms/Filed'
import { sendContactForm } from '@/lib/api'
import { orderSchema } from '@/lib/validation/schema'

export interface ServiceFormValues {
  fullName?: string
  phone?: string
  message?: string
}
interface Props {
  checked?: boolean
  className?: string
  title?: string
  badge?: string
  icon_url?: string
  variant?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  onClose?: () => void
}

const Modal = (props: Props) => {
  const { className, title, icon_url, variant, children, checked = false, onClose } = props

  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState<string | null>()

  const firstInputRef = useRef<HTMLInputElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ServiceFormValues>({
    mode: 'onChange',
    resolver: yupResolver<ServiceFormValues>(orderSchema),
  })

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!checked) {
      recaptchaRef.current?.reset()
      setCaptcha(null)
    }
  }, [checked])

  const onSubmit = async (data: ServiceFormValues) => {
    if (!captcha) {
      console.error('Please verify that you are not a robot')
      return
    }

    setLoading(true)
    // alert(JSON.stringify(data))
    const senderData = { ...data, title, action: 'form_service' }
    // console.log(senderData)
    const res = await sendContactForm(senderData)

    recaptchaRef.current?.reset()
    setCaptcha(null)
    setLoading(false)
    reset()
  }

  const handleClose = () => {
    onClose?.()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleBackdropKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        id="modal-service"
        readOnly
        className={`modal-toggle ${className ? className : ''}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={handleBackdropClick}
        onKeyDown={handleBackdropKeyDown}
        className="modal cursor-pointer"
      >
        <div className={`modal-box relative ${variant === 'sm' ? 'w-screen max-w-sm shadow-md' : ''}`}>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Закрити вікно"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {children ? (
            children
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="my-2 flex h-12 justify-center">
                  {icon_url && <Image src={`${icon_url}`} alt="hello" width="48" height="48" />}
                </div>
                <p className="mt-1 text-3xl font-semibold text-gray-600">{title}</p>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <Filed register={register} errors={errors?.fullName} fieldName="fullName" label="Ім'я" required />
                  <Filed register={register} errors={errors?.phone} fieldName="phone" label="Телефон" required />
                  <Filed
                    register={register}
                    errors={errors?.message}
                    fieldName="message"
                    textarea
                    label="Ваше повідомлення"
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

                <Button
                  disabled={!isValid || loading}
                  className={`btn-secondary btn-block mt-8 ${loading ? 'loading' : ''}`}
                >
                  Замовити
                </Button>
              </Form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Modal
