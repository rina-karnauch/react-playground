import './ExpenseAdder.css'
import React, {useState} from "react";


function ExpenseAdder(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // for id, to not count inside stuff
        const totalLength = props.expenses.reduce((a, obj) => a + Object.keys(obj).length, 0) / 4 + 1;
        const expenseData = {
            id: "e" + totalLength,
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // communicating up
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <div className="expense-adder">
            <div className="adder-title">
                add new expense
            </div>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}
                /> <br/>

                <label>Amount</label>
                <input type='number'
                       min='0.1'
                       step='0.1'
                       onChange={amountChangeHandler}
                /> <br/>
                <label>Date</label>
                <input type='date'
                       min='2019-01-01'
                       max='2022-12-31'
                       onChange={dateChangeHandler}
                /> <br/>
                <div className="submit-new-expense">
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
    );
}


export default ExpenseAdder;