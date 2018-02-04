import React from 'react';
import styled from 'styled-components';

const Header = (props) => (
	<Head>
		<AppTitle>Stocker</AppTitle>
		{/* <Link target="_blank" href="https://github.com/AjitsinghKamal/stocker.git">Git</Link> */}
	</Head>
);

const Head = styled.header`
	padding: 3rem 3rem 1.4rem;
	color: #fff;
`
const AppTitle = styled.h1`
	font-family: 'Montserrat', sans-serif;
	color: inherit;
	text-align: center;
`


export default Header;