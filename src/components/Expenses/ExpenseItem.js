import React from 'react';
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const deleteExpenseHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        LocationOfExpenditure={props.LocationOfExpenditure}
        amount={props.amount}
      />
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
