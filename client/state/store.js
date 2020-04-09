import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducers } from './reducers/'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = window.__REDUX_STATE__
const store = createStore( reducers, initialState, composeWithDevTools( applyMiddleware( thunkMiddleware ) ) )

export default store
