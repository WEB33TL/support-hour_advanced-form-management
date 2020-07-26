import React from 'react'

const Form = (props) => {
  const { isDisabled, handleChange, handleSubmit, err } = props
  console.log('Inside form ==> ', props)
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        data-cy="testName"
      />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} cy="email" />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />

      {/* <label id="tos">Terms of Service
      <input type="checkbox" name="tos" id="tos" />
      </label> */}
      <input type="submit" value="Submit your form" disabled={isDisabled} />
      <p>{err !== undefined ? (err.email) : null}</p>
    </form>
  )
}

export default Form
