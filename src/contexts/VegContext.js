import React, { createContext, useReducer } from 'react'
import { vegReducer } from '../reducers/vegReducer'

export const VegContext = createContext()

const VegContextProvider = (props) => {
  const [veggies, dispatch] = useReducer(vegReducer, [
    { id: 1, name: 'Cucumber' },
    { id: 2, name: 'Carrot' },
    { id: 3, name: 'Aubergine' },
  ])
  return (
    <VegContext.Provider value={{ veggies, dispatch }}>
      {props.children}
    </VegContext.Provider>
  )
}

export default VegContextProvider
