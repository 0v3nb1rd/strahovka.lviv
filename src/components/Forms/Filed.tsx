interface Props {
  name: string
  inputType?: string
  textarea?: boolean
  isRequired?: boolean
  label?: string
  placeholder?: string
  ref?: HTMLLabelElement
}

export default function Filed({
  name,
  label,
  textarea,
  placeholder = ' ',
  inputType = 'text',
  isRequired = false,
}: Props) {
  return (
    <div className="relative z-0">
      {textarea ? (
        <textarea
          name="message"
          className="peer block h-24 w-full resize-none appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
          placeholder=" "
        ></textarea>
      ) : (
        <input
          type={inputType}
          name={name}
          required={isRequired}
          className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 focus:border-accent focus:outline-none focus:ring-0"
          placeholder={placeholder}
        />
      )}

      {label && (
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
          {label} {isRequired && '*'}
        </label>
      )}
    </div>
  )
}
