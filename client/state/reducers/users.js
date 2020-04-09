'use strict'
export default (
	state = { value: [], loading: false, error: false },
	action
) => {
	switch ( action.type ) {
	case 'SETTINGS_FETCHED':
		state = { ...state, setting: true, loading: true, error: false, me: 'test' }
		return state
	case 'LOADING':
		state = { ...state, loading: true, error: false, me: 'test' }
		return state
	case 'USER_SIGNUP':
		state = {
			...state,
			value  : { user: action.user },
			loading: false,
			error  : false
		}
		return state
	default:
		return state
	}
}
