
import Expenses from './components/Expenses';
import './App.css';
import ExpenseAdder from "./components/ExpenseAdder";
import React, {useState} from 'react';

function App() {

  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <div className="site-title">
        expense manger
      </div>
      <Expenses onAddExpense={addExpenseHandler} expenses={expenses}>
      </Expenses>
    </div>
  );
}

export default App;
