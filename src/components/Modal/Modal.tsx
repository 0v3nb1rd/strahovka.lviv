'use client'

import React, { useEffect, useRef, forwardRef } from 'react'

import Form from '../UI/Form'
import Badge from '../UI/Badge'
import Image from 'next/image'

interface Props {
  checked?: boolean
  className?: string
  title?: string
  badge?: string
  ref?: any
  icon_url?: string
  variant?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

const Modal = forwardRef(
  ({ className, title, icon_url, badge = 'Автострахування', variant, children, checked = false }: Props, ref: any) => {
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
              <Form>
                <div className="space-y-4">
                  <div className="text-center">
                    {/* <Badge variant="primary" size="md">
                      {badge}
                    </Badge> */}
                    <div className="my-2 flex h-12 justify-center">
                      {icon_url && <Image src={`${icon_url}`} alt="hello" width={100} height={200} />}
                    </div>
                    <p className="mt-1 text-3xl font-semibold text-gray-600">{title}</p>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block font-semibold text-gray-600">
                      Ім'я
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block font-semibold text-gray-600">
                      Телефон
                    </label>
                    <input type="text" className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none" />
                  </div>
                </div>
                <button type="submit" className="btn-secondary btn-block btn mt-8">
                  Замовити
                </button>
              </Form>
            )}
          </label>
        </label>
      </>
    )
  }
)

export default Modal
