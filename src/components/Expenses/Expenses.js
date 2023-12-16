import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
    </Card>
  );
};

export default Expenses;
