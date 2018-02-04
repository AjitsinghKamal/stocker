import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../card';
import Header from '../header';
import {connect} from 'react-redux';

class App extends Component {
	stocksAvailable = null;
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps() {
		this.stocksAvailable = this.props.available.map((stock,index) => (
			<Card key={index} detail={this.props.stocksList[stock]} name={stock}/>
		))
	}


	render() {
		return (
			<Host>
				<Header />
				<Lobby>
					{this.stocksAvailable}
				</Lobby>
			</Host>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		stocksList: state.stocks,
		available: state.stocks.stockMap
	}
}


// ======== styles ==========
const Host = styled.div`
	min-height: 100vh;
	width: 100vw;
`
const Lobby = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 1.4rem 2rem;
`


export default connect(
	mapStateToProps
)(App);
