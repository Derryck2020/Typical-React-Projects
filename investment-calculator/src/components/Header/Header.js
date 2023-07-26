import React from 'react';
import logo from '../../assets/AI.jpg';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" />
			<h1>AI Investment Return Checker</h1>
		</header>
	);
};

export default Header;
