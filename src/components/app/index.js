import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../card';
import Header from '../header';
import Loader from '../loader';
import Footer from '../footer';
import {connect} from 'react-redux';
import { connectionDone } from '../../actions';

class App extends Component {
	constructor(props) {
		super(props);
	}

	makeLobby() {
		if (this.props.notConnected) {
			return <Loader />
		} else {
			return this.props.available.map((stock,index) => (
				<Card key={index} detail={this.props.stocksList[stock]} name={stock}/>
			));
			this.props.listPrepared();
		}
	}


	render() {
		const lobby = this.makeLobby();
		return (
			<Host>
				<Header />
				<Lobby>
					{lobby}
				</Lobby>
				<Footer />
			</Host>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		stocksList: state.stocks,
		available: state.stocks.stockMap,
		notConnected: state.status.closed
	}
}

const mapDispatchToProps = dispatch => {
	return {
		listPrepared: () => (
			dispatch(connectionDone())
		)
	}
}


// ======== styles ==========
const Host = styled.div`
	min-height: 100vh;
	max-width: 1400px;
    margin: 0 auto;
`
const Lobby = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 1.4rem 2rem;
	min-height: calc(100vh - 200px);
`


export default connect(
	mapStateToProps
)(App);
