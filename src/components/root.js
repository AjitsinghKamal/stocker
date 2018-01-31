import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app';

/**
 * Router config component
 * bridge between the store and the entire app
 * @param {PropObject} 
 */
const Root = ({store}) => (
	<Provider store = { store }>
		<Router>
			<Route exact path = '/' component = {App} />
		</Router>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // make sure store is available
}

export default Root;