/**
 * possible actions to consider
 * 
 * user enters ---> start socket connection ====> show loader 
 * 
 * render list ----> listen messages -----> store response
 * 
 * mintain status for each stock
 * 
 */


export const CONNECT = 'CONNECT';
export const connectionStarted = () => ({
	type: CONNECT
});

export const DISCONNECT = 'DISCONNECT';
export const connectionOver = () => ({
	type: DISCONNECT
})

export const CONNECTION_OPEN = 'CONNECTION_OPEN';
export const openConnection = () => ({
	type: CONNECTION_OPEN
})

export const CONNECTION_CLOSE = 'CONNECTION_CLOSE';
export const closeConnection = () => ({
	type: CONNECTION_CLOSE
})

export const MESSAGE = 'MESSAGE';
export const listen = (name, value, time) => ({
	type: MESSAGE,
	name,
	value,
	time
});

export const MAP_RESPONSE = 'MAP_RESPONSE';
export const mapData = (data) => ({
	type: MAP_RESPONSE,
	data
})
