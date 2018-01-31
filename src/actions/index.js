export const START_SESSION = 'START_SESSION';
export const startSession = () => ({
	type: START_SESSION
})

export const REQUEST_CONNECTION = 'REQUEST_CONNECTION';
export const connectionStarter = (url) => ({
	type: REQUEST_CONNECTION,
	url
})
export const COMPLETE_CONNECTION = 'COMPLETE_CONNECTION';
export const connectionDone = (response) => ({
	type: COMPLETE_CONNECTION,
	response
})

const triggerHandshake = (state) => {
	return new WebSocket(state.url);
}