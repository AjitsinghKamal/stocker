import React from 'react';
import styled from 'styled-components';

const Header = (props) => (
	<HeadBar>
		<AppTitle>Stocker</AppTitle>
		<a href="#">Git</a>
	</HeadBar>
);

const HeadBar = styled.header`
	padding: 3rem 3rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
`
const AppTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	color: inherit;
`

export default Header;