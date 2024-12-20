import * as yup from 'yup'
import 'yup-phone-lite'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const orderSchema = yup
  .object({
    fullName: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .min(10, 'закороткий номер телефону')
      .phone('UA', 'Некоректний номер телефону')
			.required("Обов'язкове поле"),
		message: yup.string().required("Обов'язкове поле"),
    // age: yup.number().positive().integer().required(),
  })
  .required()

export const contactSchema = yup
  .object({
    fullName: yup.string().required("Обов'язкове поле"),
    phone: yup
      .string()
      .min(10, 'закороткий номер телефону')
      .phone('UA', 'Некоректний номер телефону')
      .required("Обов'язкове поле"),
    email: yup.string().email('некоректний email').required("Обов'язкове поле"),
    message: yup.string().required("Обов'язкове поле"),
  })
  .required()

export const subscribeSchema = yup
  .object({
    email: yup.string().email('некоректний email').required("Обов'язкове поле"),
  })
  .required()
