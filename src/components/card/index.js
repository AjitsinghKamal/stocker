import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import * as moment from 'moment';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

class Card extends Component {
	reveal = false;
	constructor(props) {
		super(props);
		this.state = {
			spark: [this.props.detail.value],
			status: 0
		}
		this.establishCurrentStatus = this.establishCurrentStatus.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const a = this.state.spark;
		if (nextProps !== this.props) {
			if (a.length > 9) {
				a.shift();
			}
			a.push(nextProps.detail.value);
			const status = this.establishCurrentStatus(nextProps.detail.value, this.props.detail.value);
			this.setState({
				spark: a,
				status
			});
		}
	}

	componentDidMount() {
		this.reveal = true;
	}

	establishCurrentStatus(newValue, currentValue) {
		if (newValue < currentValue) {
			return -1;
		} else if (newValue > currentValue) {
			return 1;
		} else {
			return 0;
		}
	}

	render() {
		const { value, time, status } = this.props.detail;
		return (
			<Frame style={{opacity: (this.reveal)? '1' : '0' }}>
				<Title color={status}>{this.props.name}</Title>
				<Sparkcontainer>
					<Sparklines data={this.state.spark} limit={10}>
						<SparklinesLine color="#1c8cdc" style={{ strokeWidth: 3}} />
						<SparklinesSpots style={{ fill: "orange" }} />
					</Sparklines>
				</Sparkcontainer>
				<Foot>
					<Sub>{value.toFixed(3)}</Sub>
					<Sub><SubText2>Last Updated :</SubText2> <SubText2>{moment(time).format("ddd, h:mm")}</SubText2></Sub>
				</Foot>
			</Frame>
		);
	}
}

// ======== styles ==========
const Frame = styled.div`
	flex: 0 0 28%;
	margin: 1rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background: #252525;
	color: white;
	max-width: 410px;
	min-width: 260px;
	box-shadow: 0 0 30px #555454;
	transition: all 0.3s;

	@media (max-width: 1024px) {
		flex: 0 0 40%;
	}

	@media (max-width: 640px) {
		flex: 0 0 100%;
	}
`

const Title = styled.div`
	font-size: 2rem;
	padding: 1rem 0.8rem;
	align-self: stretch;
    font-weight: 700;
	letter-spacing: 2px;
	text-align:	center;
	transition: background 0.3s;
	${props => (props.color < 0) && css`
		background: #c76f16;
	`}
	${props => (props.color === 1) && css`
		background: #96CF4C;
	`}
	${props => (props.color === 0) && css`
		background: #848484;
	`}
`

const Sparkcontainer = styled.div`
	width:60%;
	padding: 3rem 0;
`

const Foot = styled.div`
	padding: 0.6rem;

`

const Sub = styled.div`
	padding: 1rem 0;
	font-weight: 600;
	font-size: 2.1rem;
	text-align: center;
`

const SubText2 = styled.span`
	font-size: 0.8rem;
`




export default Card;
