import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [chooseDate, setChooseDate] = useState('');

	// OR
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	chooseDate: '',
	// });

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		// OR
		// setUserInput({ ...userInput, enteredTitle: e.target.value });
		// OR
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: e.target.value };
		// });
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
		// setUserInput({ ...userInput, enteredAmount: e.target.value });
	};

	const chooseDateHandler = (e) => {
		setChooseDate(e.target.value);
		// setUserInput({ ...userInput, chooseDate: e.target.value });
	};

	// alternative for the handlers

	// const inputChangeHandler = (identifier, value) => {
	// 	if (identifier === 'title') {
	// 		setEnteredTitle(value);
	// 	} else if (identifier === 'amount') {
	// 		setEnteredAmount(value);
	// 	} else {
	// 		setChooseDate(value);
	// 	}
	// };

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(chooseDate),
		};
		console.log(expenseData);

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setChooseDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
					{/* <input
						type="text"
						onChange={(e) => {
							inputChangeHandler('title', e.target.value);
						}}
					/> */}
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
					{/* <input
						type="number"
						min="0.01"
						step="0.01"
						onChange={(e) => {
							inputChangeHandler('amount', e.target.value);
						}}
					/> */}
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2023-12-31"
						value={chooseDate}
						onChange={chooseDateHandler}
					/>
					{/* <input
						type="date"
						min="2020-01-01"
						max="2023-12-31"
						onChange={(e) => {
							inputChangeHandler('date', e.target.value);
						}}
					/> */}
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
