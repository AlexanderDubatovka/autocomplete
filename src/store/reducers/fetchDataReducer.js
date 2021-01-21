import { GET_DATA } from '../actionTypes/actionTypes'

const initialState = {
  data: [],
}


export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA:
        return {...state, data: [...state.data, ...action.payload]}
      default: 
        return state
    }
}

