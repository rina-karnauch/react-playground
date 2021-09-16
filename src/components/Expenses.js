import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpenseAdder from "./ExpenseAdder";
import React from "react";


function Expenses(props) {

    // communicating up
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData
        }
        props.onAddExpense(expenseDate);
    }

    // communicating up


    return (
        <div>
            <div className="expenses">
                {props.expenses.map(
                    expense => <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </div>
            <ExpenseAdder onSaveExpenseData={saveExpenseDataHandler} expenses={props.expenses}>
            </ExpenseAdder>
        </div>
    );
}

export default Expenses;