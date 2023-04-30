import Form from '../UI/Form'

const ContactForm = () => {
  return (
    <Form className="w-[40%]">
      <div className="flex flex-col gap-6">
        <div className="relative z-0">
          <input
            type="text"
            name="name"
            className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
            Ваше ім'я *
          </label>
        </div>

        <div className="relative z-0">
          <input
            type="text"
            name="tel"
            className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
            Телефон *
          </label>
        </div>

        <div className="relative z-0">
          <input
            type="text"
            name="email"
            className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
            Email
          </label>
        </div>

        <div className="relative z-0">
          <textarea
            name="message"
            className="peer block h-24 w-full resize-none appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
            placeholder=" "
          ></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
            Ваше повідомлення *
          </label>
        </div>
      </div>

      <button type="submit" className="btn-secondary btn-wide btn mt-8">
        Відправити
      </button>
    </Form>
  )
}

export default ContactForm
