import React from 'react';
import styled from 'styled-components';

const Footer = (props) => (
	<Footbar>
		<p>created by <a href="mailto:ajitskamal@gmail.com">@slumbergeist</a> for media.net</p>
		<Link target="_blank" href="https://github.com/AjitsinghKamal/stocker.git">Git</Link>
	</Footbar>
);

const Footbar = styled.header`
	padding: 3rem 3rem 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
`
const Link = styled.a`
	color: #fff;
	font-weight: 700;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.8
	}
`

export default Footer;