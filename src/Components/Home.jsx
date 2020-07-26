import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  setTimeout(() => {
    history.push('/confirm')
  }, 2000)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
