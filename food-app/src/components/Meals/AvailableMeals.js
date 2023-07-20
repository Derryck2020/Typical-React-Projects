import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				'https://uisher-menu-default-rtdb.firebaseio.com/Meals.json'
			);

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};

		fetchMeals().catch((error) => {
			setIsLoading(false);
			setIsError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.mealIsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (isError) {
		return (
			<section className={classes.mealsError}>
				<h2>Can't Load ...You encountered an error</h2>
			</section>
		);
	}

	const mealsList = meals.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			title={meal.name}
			information={meal.description}
			pprice={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
