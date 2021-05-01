import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'

const Navbar = () => {
  const { veggies } = useContext(VegContext)
  return (
    <div className='navbar'>
      <h1>List of Vegetables</h1>
      <p>{veggies.length} veggies available.</p>
    </div>
  )
}

export default Navbar
