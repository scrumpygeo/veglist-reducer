import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'

const VegList = () => {
  const { veggies } = useContext(VegContext)
  return veggies.length ? (
    <div>
      <ul>
        {veggies.map((veg) => {
          return <li>{veg.name}</li>
        })}
      </ul>
    </div>
  ) : (
    <div>No veggies in the list.</div>
  )
}

export default VegList
