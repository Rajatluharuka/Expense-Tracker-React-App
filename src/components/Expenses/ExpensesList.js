import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const changeTitleHandler = (id, newTitle) => {
    const updatedExpenses = props.items.map((expense) => {
      if (expense.id === id) {
        return { ...expense, title: newTitle };
      }
      return expense;
    });
    props.onUpdateExpense(updatedExpenses);
  };

  const changeAmountHandler = (id, newAmount) => {
    const updatedExpenses = props.items.map((expense) => {
      if (expense.id === id) {
        return { ...expense, amount: newAmount };
      }
      return expense;
    });
    props.onUpdateExpense(updatedExpenses);
  };

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = props.items.filter((expense) => expense.id !== id);
    props.onUpdateExpense(updatedExpenses);
  };

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            onChangeTitle={changeTitleHandler}
            onChangeAmount={changeAmountHandler}
            onDeleteExpense={deleteExpenseHandler}
          />
        ))}
        <h4 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h4>
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          onChangeTitle={changeTitleHandler}
          onChangeAmount={changeAmountHandler}
          onDeleteExpense={deleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
