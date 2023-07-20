import React from 'react';
import mealsImage from '../../assets/vegas.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Fork & Flame</h1>
				<HeaderCartButton whenClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="Restuarant Meal" />
			</div>
		</>
	);
};

export default Header;
