import React, { useState } from 'react';
import classes from './UserInput.module.css';

const initialUserInput = {
	'current-savings': '',
	'yearly-contribution': '',
	'expected-return': '',
	duration: '',
};

const UserInput = (props) => {
	const [enteredInput, setEnteredInput] = useState(initialUserInput);

	const submitHandler = (e) => {
		e.preventDefault();
		props.onCalculate(enteredInput);
	};

	const resetHandler = () => {
		setEnteredInput(initialUserInput);
	};

	const inputChangeHandler = (input, value) => {
		setEnteredInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value,
			};
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="number"
						id="current-savings"
						placeholder="3000"
						onChange={(event) =>
							inputChangeHandler('current-savings', event.target.value)
						}
						value={enteredInput['current-savings']}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						placeholder="1000"
						onChange={(event) =>
							inputChangeHandler(
								'yearly-contribution',
								event.target.value
							)
						}
						value={enteredInput['yearly-contribution']}
					/>
				</p>
			</div>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						type="number"
						id="expected-return"
						placeholder="8"
						onChange={(event) =>
							inputChangeHandler('expected-return', event.target.value)
						}
						value={enteredInput['expected-return']}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						id="duration"
						placeholder="5"
						onChange={(event) =>
							inputChangeHandler('duration', event.target.value)
						}
						value={enteredInput['duration']}
					/>
				</p>
			</div>
			<p className={classes.actions}>
				<button
					type="reset"
					className={classes.buttonAlt}
					onClick={resetHandler}
				>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default UserInput;
