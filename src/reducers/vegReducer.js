import { v4 as uuidv4 } from 'uuid'

export const vegReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VEG':
      return [
        ...state,
        {
          name: action.veg.name,
          id: uuidv4(),
        },
      ]
    case 'REMOVE_VEG':
      return state.filter((veg) => veg.id !== action.id)
    default:
      return state
  }
}
