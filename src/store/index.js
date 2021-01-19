import { createStore, combineReducers, applyMiddleware } from 'redux'
import { fetchDataReducer } from './reducers/fetchDataReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    data: fetchDataReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))