import React, { useState } from 'react';
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');

  const changeTitleHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const changeExpenseAmountHandler = () => {
    setAmount(100);
  };

  const deleteExpenseHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        LocationOfExpenditure={props.LocationOfExpenditure}
        amount={amount}
      />
      <button onClick={changeTitleHandler}>Change Title</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
      <button onClick={changeExpenseAmountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
