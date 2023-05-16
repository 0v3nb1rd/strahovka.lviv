'use client'

import { useForm, Resolver } from 'react-hook-form'

import { Form, Button } from '../UI'
import Filed from './Filed'

type FormValues = {
  fullName?: string
  phone?: string
  email?: string
  message?: string
}

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values.fullName ? values : {},
//     errors: !values.fullName
//       ? {
//           fullName: {
//             type: 'required',
//             message: "це поле обов'язкове!",
//           },
//         }
//       : {},
//   }
// }

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    // resolver: resolver,
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-[40%]">
      <div className="flex flex-col gap-6">
        <Filed register={register} errors={errors?.fullName} fieldName="fullName" label="Ваше ім'я" required />
        <Filed
          register={register}
          inputType="number"
          errors={errors?.phone}
          fieldName="phone"
          label="Телефон"
          required
        />
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

      <Button disabled={!isValid} className="btn-secondary btn-wide mt-8" type="submit">
        Відправити
      </Button>
    </Form>
  )
}
