import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Switch, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { formSchema } from './Schema/formSchema'
import Form from './Components/Form'
import Home from './Components/Home'
import Confirmation from './Components/Confirmation'

const initialForm = {
  name: '',
  email: '',
  password: ''

  // tos: false Hello wo
}

const App = () => {
  const [form, setForm] = useState()
  const [order, setOrder] = useState(initialForm)
  const [err, setErr] = useState()
  const [isDisabled, setIsDisabled] = useState(true)
  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(form)
      .then(valid => {
        setIsDisabled(!valid)
      })
  }, [form])
  const handleChange = e => {
    if (e.target.type == 'checkbox') {
      setForm({ ...form, [e.target.name]: e.target.checked })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
    validateForm(e.target.name, e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('https://reqres.in/api/users', form)
      .then(res => {
        setOrder(res.data)
        history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const validateForm = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErr({
          ...err,
          [e.target.name]: ''
        })
      })
      .catch(error => {
        setErr({
          ...err,
          [name]: error.errors[0]
        })
      })
  }
  console.log('App err--> ', err)
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/confirm">Confirm</Link>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path='/form'>
          <Form
            err={err}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
          />
        </Route>

        <Route path='/confirm'>
          <Confirmation order={order} />
        </Route>

      </Switch>


    </div>
  )
}

export default App
