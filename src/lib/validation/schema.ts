import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const orderSchema = yup.object({
  fullName: yup.string().required("Обов'язкове поле"),
  phone: yup.string().matches(phoneRegExp, 'некоректний номер'),
  // age: yup.number().positive().integer().required(),
}).required();

export const contactSchema = yup.object({
  fullName: yup.string().required("Обов'язкове поле"),
  phone: yup.string().matches(phoneRegExp, 'некоректний номер'),
  email: yup.string().email('некоректний email').required("Обов'язкове поле"),
  message: yup.string().required("Обов'язкове поле"),
}).required();