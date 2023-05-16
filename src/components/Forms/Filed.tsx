import { UseFormRegister, Validate, Path, FieldError } from 'react-hook-form'

type IFormValues = {
  fullName: string
  phone: string
  email: string
  message: string
}

type fieldName = 'fullName' | 'phone' | 'email' | 'message'

interface Props {
  fieldName: fieldName
  inputType?: string
  textarea?: boolean
  required?: boolean
  placeholder?: string
  ref?: HTMLLabelElement
  label: Path<any>
  register: UseFormRegister<any>
  errors?: FieldError
}

export default function Filed({
  fieldName,
  label,
  textarea,
  register,
  errors,
  placeholder = ' ',
  inputType = 'text',
  required = false,
}: Props) {
  return (
    <div className="relative z-0">
      {textarea ? (
        <textarea
          className={`peer block h-24 w-full resize-none appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900  focus:outline-none focus:ring-0
						${errors ? 'border-error' : 'focus:border-accent'}
					`}
          placeholder=" "
          {...register(fieldName, {
            required: "обов'язкове поле",
            minLength: { value: 5, message: `мінімум ${5} символів` },
          })}
        ></textarea>
      ) : (
        <input
          type={inputType}
          className={`peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent px-2 py-2.5 text-gray-900 transition-colors focus:outline-none focus:ring-0
						${errors ? 'border-error' : 'focus:border-accent'}
					`}
          placeholder={placeholder}
          {...register(fieldName, {
            required: "обов'язкове поле",
            minLength: { value: 5, message: `мінімум ${5} символів` },
            // inputType === "email"
          })}
        />
      )}

      {label && (
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-2 text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75">
          {!errors ? label : <span className="text-red-500">{errors?.message}</span>}
          {required && '*'}
          {/* {!errors ? label : <span className="absolute ml-2 mt-1 text-xs text-red-500">{errors?.message}</span>} */}
        </label>
      )}
    </div>
  )
}
