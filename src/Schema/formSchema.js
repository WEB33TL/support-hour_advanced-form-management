import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required().min(3, 'Name needs to be 3 or more characters long'),
  email: yup.string().email('Email is required').required('Email is required'),
  password: yup.string()
})
