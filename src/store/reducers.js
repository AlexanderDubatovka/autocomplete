const initialState = {
  data: [],
}

const GET_DATA = 'GET_DATA'

export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA:
        return {...state, data: [...state.data, ...action.payload]}
      default: 
        return state
    }
}

export const addDataAction = payload => ({type: GET_DATA, payload})
