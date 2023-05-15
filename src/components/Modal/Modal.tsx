'use client'

import React, { useEffect, useRef, forwardRef } from 'react'

import Form from '../UI/Form'
import Badge from '../UI/Badge'
import Image from 'next/image'
import Button from '../UI/Button'
import Filed from '../Forms/Filed'

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

  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [])

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

              <Form>
                <div className="flex flex-col gap-6">
                  <Filed name="name" label="Ім'я" isRequired />
                  <Filed name="phone" label="Телефон" isRequired />
                </div>

                <Button type="submit" className="btn-secondary btn-block mt-8">
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
