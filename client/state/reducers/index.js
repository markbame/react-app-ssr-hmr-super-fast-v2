import { combineReducers } from 'redux'
import users from './users'

const allReducers = {
	users
}

export const reducers = combineReducers( allReducers )
