import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email('Email is required').required('Email is required'),
  password: yup.string()
})
