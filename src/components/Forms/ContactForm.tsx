'use client'

import { Form, Button } from '../UI'
import Filed from './Filed'

export default function ContactForm() {
  return (
    <Form className="w-[40%]">
      <div className="flex flex-col gap-6">
        <Filed name="name" label="Ваше ім'я" isRequired />
        <Filed name="tel" label="Телефон" isRequired />
        <Filed name="Email" label="Email" />
        <Filed name="message" textarea label="Ваше повідомлення" isRequired />
      </div>

      <Button className="btn-secondary btn-wide mt-8" type="submit">
        Відправити
      </Button>
    </Form>
  )
}
