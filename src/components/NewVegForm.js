import React, { useContext, useState } from 'react'
import { VegContext } from '../contexts/VegContext'

const NewVegForm = () => {
  const [name, setName] = useState('')
  const { dispatch } = useContext(VegContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_VEG', veg: { name } })
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Veggie'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input type='submit' value='Add Veggie' />
    </form>
  )
}

export default NewVegForm
