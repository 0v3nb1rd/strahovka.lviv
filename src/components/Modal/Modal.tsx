'use client'

import React, { useEffect, useRef, forwardRef, useState } from 'react'
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
}

const Modal = forwardRef<HTMLLabelElement, Props>((props, ref) => {
  const { className, title, icon_url, variant, children, checked = false } = props

  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(false)

  const firstInputRef = useRef<HTMLInputElement>(null)

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

  const onSubmit = async (data: any) => {
    setLoading(true)
    // alert(JSON.stringify(data))
    // console.log(title, data)
    const senderData = { ...data, title, action: 'form_service' }
    const res = await sendContactForm(senderData)
    setLoading(false)
    reset()
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
      <label htmlFor="modal-service" ref={ref} className="modal cursor-pointer">
        <label className={`modal-box relative ${variant === 'sm' ? 'w-screen max-w-sm shadow-md' : ''}`} htmlFor="">
          {children ? (
            children
          ) : (
            <>
              <div className="mb-6 text-center">
                <div className="my-2 flex h-12 justify-center">
                  {icon_url && <Image src={`${icon_url}`} alt="hello" width={100} height={200} />}
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

                <Button
                  disabled={!isValid || loading}
                  className={`btn-secondary btn-block mt-8 ${loading ? 'loading' : ''}`}
                >
                  Замовити
                </Button>
              </Form>
            </>
          )}
        </label>
      </label>
    </>
  )
})

export default Modal
