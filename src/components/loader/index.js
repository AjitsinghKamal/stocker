import React from 'react';

/**
 * presentational componenent for loader
 * 
 * @param {*} props 
 */
const Loader = (props) => (
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" style={{ isolation: 'isolate' }} viewBox="15.5 15.5 69 69" width="69" height="69" id="loader"><path d=" M 50 20 L 80 80 L 20 80 L 50 20 Z " fill="none" vectorEffect="non-scaling-stroke" /></svg>
		<span style={{ color: '#fff' }}>{props.text}</span>
	</div>
)

export default Loader;