import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducers } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    data: reducers,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))