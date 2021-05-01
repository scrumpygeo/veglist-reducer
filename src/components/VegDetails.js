import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'

const VegDetails = ({ veg }) => {
  const { dispatch } = useContext(VegContext)
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_VEG', id: veg.id })}>
      <div className='name'> {veg.name}</div>
    </li>
  )
}

export default VegDetails
