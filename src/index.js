import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import socketMiddleware from './middleware/socket';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/root';
import appReducer from './reducers';
import { connectionStarted } from './actions';
import './index.css';

const store = createStore(
	appReducer,
	applyMiddleware(
		socketMiddleware
	)
)

store.dispatch(connectionStarted())

ReactDOM.render(<Root store = {store}/>, document.getElementById('root'));
registerServiceWorker();
