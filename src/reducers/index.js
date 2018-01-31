import { START_SESSION } from '../actions';

const appReducer = (state = {started: false}, actions) => {
	switch (actions.type) {
		case START_SESSION:
			return Object.assign({}, {
				started : true
			})
		default:
			return state;
	}
}

export default appReducer;