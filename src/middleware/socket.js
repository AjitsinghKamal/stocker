/**
 * middleware to handle streaming messages
 * 
 */

import {
	DISCONNECT,
	CONNECT,
	listen,
	closeConnection,
	openConnection
} from '../actions'

let socket = null;
const WS_URL = 'ws://stocks.mnet.website';


/**
 * Utility Function
 * create new websocket object 
 * attaches eventlisteners to it
 * @param {Object} store  
 * @param {string} url 
 */
const configureSocket = ({ dispatch }, url) => {
	try {
		socket = new WebSocket(WS_URL);
	
		socket.onopen = () => {
			console.log('readyState now OPEN');
			return dispatch(openConnection());
		}
		socket.onclose = (event) => {
			console.log('readyState now OPEN');
			return dispatch(closeConnection());
		}
		socket.onmessage = (event) => {
			console.log('readyState now OPEN -- getting message');
			const data = JSON.parse(event.data);
			data.forEach(item => {
				dispatch(listen(item[0],item[1],Date.now()));
			});
		}

		socket.onerror = (event) => {
			console.log('error occured');
			return dispatch(closeConnection());
		}
	} catch(error) {
		console.error(error);
	}

}

/**
 * Custom Middleware for
 * listening to manage socket connection
 * @param {Object} store 
 */
const socketMiddleware = (store) => next => action => {
	switch (action.type) {
		case CONNECT:
			configureSocket(store);
			console.log('socket connection established')
			return next(action);

		case DISCONNECT:
			socket.close();
			console.log('socket connection closed')
			socket = null;
			return next(action);

		default:
			return next(action);
	}
}

export default socketMiddleware;