import classNames from 'classnames'
import React from 'react'
import Form from '../UI/Form'
import Badge from '../UI/Badge'

interface Props {
  className?: string
  title?: string
  variant?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({ className, title, variant, children }) => {
  return (
    <>
      <input type="checkbox" id="modal-service" className={`modal-toggle ${className ? className : ''}`} />
      <label htmlFor="modal-service" className="modal cursor-pointer">
        <label className={`modal-box relative ${variant === 'sm' ? 'w-screen max-w-sm shadow-md' : ''}`} htmlFor="">
          {children ? (
            children
          ) : (
            <Form>
              <div className="space-y-4">
                <div className="text-center">
                  <Badge variant="primary" size="md">
                    Автострахування
                  </Badge>
                  <p className="mt-1 text-3xl font-semibold text-gray-600">{title}</p>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block font-semibold text-gray-600">
                    Ім'я
                  </label>
                  <input type="text" className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none" />
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

export default Modal
