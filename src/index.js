import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/root';
import appReducer from './reducers';
import './index.css';

const store = createStore(
	appReducer,
	applyMiddleware(
		thunkMiddleware
	)
)

ReactDOM.render(<Root store = {store}/>, document.getElementById('root'));
registerServiceWorker();
