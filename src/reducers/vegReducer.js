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
    default:
      return state
  }
}
