import {
	CONNECT,
	DISCONNECT,
	MESSAGE,
	CONNECTION_OPEN,
	CONNECTION_CLOSE,
	MAP_RESPONSE
 } from '../actions';

import { combineReducers } from 'redux';

const status = (state = {connecting: false, closed: true}, actions) => {
	switch (actions.type) {
		case CONNECT:
			return Object.assign({}, state, {
				connecting : true
			});
		case DISCONNECT:
			return Object.assign({}, state, {
				closed: true
			});
		case CONNECTION_OPEN:
			return Object.assign({}, state, {
				closed: false
			});
		default:
			return state;
	}
}

const stocks = (state = {stockMap: []}, action) => {
	switch (action.type) {
		case MESSAGE:
			let updatedState;
			if ( !state[action.name] ) {
				updatedState = {
					[action.name]: {
						value: action.value,
						time: action.time,
						status: 0
					},
					stockMap: [...state.stockMap, action.name]
				}
			} else {
				updatedState = {[action.name]: {
					value: action.value,
					time: action.time,
					status: establishCurrentStatus(action.value, state[action.name].value)
					}
				}
			}
			return Object.assign({}, state, updatedState);

		default:
			return state;
	}
}

/**
 * utility function
 * TODO: must move to seperate file
 *
 */
function establishCurrentStatus(newValue, currentValue) {
	if (newValue < currentValue) {
		return -1;
	} else if (newValue > currentValue) {
		return 1;
	} else {
		return 0;
	}
}

const appReducer = combineReducers({
	status,
	stocks
});

export default appReducer;