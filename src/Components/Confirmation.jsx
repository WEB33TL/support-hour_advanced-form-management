import React from 'react'

const Confirmation = (props) => {
  console.log(props)
  return (
    <div>
      <h4>Name: {props.order.name}</h4>
      <p>Email: {props.order.email}</p>
    </div>
  )
}

export default Confirmation
