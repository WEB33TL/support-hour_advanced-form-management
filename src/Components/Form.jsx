import React from 'react'

const Form = (props) => {
  const { handleChange, handleSubmit, err } = props
  console.log('Inside form ==> ', props)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />

      {/* <label id="tos">Terms of Service
      <input type="checkbox" name="tos" id="tos" />
      </label> */}
      <input type="submit" value="Submit your form" />

    </form>
  )
}

export default Form
