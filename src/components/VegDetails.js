import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'

const VegDetails = ({ veg }) => {
  const { dispatch } = useContext(VegContext)
  return (
    <div>
      {veg.name}{' '}
      <button onClick={() => dispatch({ type: 'REMOVE_VEG', id: veg.id })}>
        Delete
      </button>
    </div>
  )
}

export default VegDetails
