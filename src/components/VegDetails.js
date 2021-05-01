import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'

const VegDetails = ({ veg }) => {
  return <div>{veg.name}</div>
}

export default VegDetails
