'use client'

import { useState } from 'react'
import { Button, Form } from '../UI'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { subscribeSchema } from '@/lib/validation/schema'
import { Fields } from 'react-facebook'
import Filed from './Filed'
import { sendContactForm } from '@/lib/api'

type SubscribeValues = {
  email: string
}

export default function CtaBlock() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SubscribeValues>({
    mode: 'onChange',
    resolver: yupResolver(subscribeSchema),
  })

  const onSubmit = async (data: any) => {
    const senderData = { ...data, title: 'Форма підписки', action: 'form_subscribe' }
    setLoading(true)
    console.log(senderData)

    const res = await sendContactForm(senderData)

    setLoading(false)
    reset()

    // alert(JSON.stringify(data))
  }

  return (
    <div className="w-full max-w-4xl rounded-2xl border-2 border-gray-100 bg-white p-14">
      <div className="flex flex-col items-center">
        <span className="-rotate-1 rounded-lg bg-yellow-100 px-2 py-px text-sm text-yellow-800">
          1000+ людей вже приєдналось
        </span>
        <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">
          Отримуйте актуальні пропозиції на автострахування першими!
        </h3>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
        >
          <input
            {...register('email')}
            className="grow rounded border-2 border-gray-300 px-3 py-3 focus:border-neutral focus:outline-none sm:rounded-l-2xl sm:rounded-r-none sm:border-r-0"
            placeholder="Email Address"
          />

          <Button
            disabled={!isValid || loading}
            className={`min-h-[3.3rem] rounded bg-neutral px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-2xl ${
              loading ? 'loading' : ''
            }`}
          >
            Підписатись
          </Button>
        </Form>
      </div>
    </div>
  )
}
