import React, { useContext } from 'react'
import { VegContext } from '../contexts/VegContext'
import VegDetails from './VegDetails'

const VegList = () => {
  const { veggies } = useContext(VegContext)
  return veggies.length ? (
    <div>
      <ul>
        {veggies.map((veg) => {
          return <VegDetails veg={veg} key={veg.id} />
        })}
      </ul>
    </div>
  ) : (
    <div>No veggies in the list.</div>
  )
}

export default VegList
