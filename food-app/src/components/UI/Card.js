import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	return (
		<div className={classes.card}>{props.children}</div>
		// the div wraps the props children so that whatever is being passed between the
		// opening and closing tag of the Card component is in the end used inside the Card
	);
};

export default Card;
