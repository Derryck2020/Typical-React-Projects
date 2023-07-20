import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);
	const pprice = `$${props.pprice.toFixed(2)}`;
	// toFixed(2) -- to 2 decimal places

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.title,
			amount: amount,
			price: props.pprice,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.title}</h3>
				<div className={classes.description}>{props.information}</div>
				<div className={classes.price}>{pprice}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
