import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	'App-header': {
		fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
		height: '100%',
		marginBottom: '30px',
		'@media (max-width: 375px)': {
			marginTop: '30px',
			width: 'content-fit',
			fontSize: '0.9rem',
			display: 'flex',
[I			gap: '2px',
			justifyContent: 'center',
		},
	},

	img: {
		width: '100px',
		height: '100px',
	},
});

const Header = () => {
	return (
		<div className={css(styles['App-header'])}>
			<img src={logo} alt='Holberton' className={css(styles.img)} />
			<h1>School dashboard</h1>
		</div>
	);
};

export default Header;
