import React, { useState } from 'react'
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
  // tos: false
}

const App = () => {
  const [form, setForm] = useState()
  const [order, setOrder] = useState(initialForm)
  const [err, setErr] = useState()
  const history = useHistory()

  const handleChange = e => {
    if (e.target.type == 'checkbox') {
      setForm({ ...form, [e.target.name]: e.target.checked })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }

    validateForm(e)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('https://reqres.in/api/users', form)
      .then(res => {
        setOrder(res.data)
        history.push('/confirm')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const validateForm = e => {
    yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErr({
          ...err,
          [e.target.name]: ''
        })
      })
      .catch(err => {
        console.log('ErrValidate--> ', err)
        setError({
          ...err,
          [e.target.name]: err.errors[0]
        })
      })
  }

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
