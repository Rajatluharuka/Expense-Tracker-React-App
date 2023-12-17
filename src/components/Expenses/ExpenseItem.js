import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const changeTitleHandler = () => {
    props.onChangeTitle(props.id, "Updated!");
  };

  const changeExpenseAmountHandler = () => {
    props.onChangeAmount(props.id, 100);
  };

  const deleteExpenseHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={props.amount}
        />
        <button onClick={changeTitleHandler}>Change Title</button>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
        <button onClick={changeExpenseAmountHandler}>Change Amount</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
