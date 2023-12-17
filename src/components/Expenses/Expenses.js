import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(
    props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === "2020";
    })
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
    setFilteredExpenses(filteredExpenses);
  };

  const updateExpenseHandler = (expense) => {
    setFilteredExpenses(expense);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList
          items={filteredExpenses}
          onUpdateExpense={updateExpenseHandler}
        />
      </Card>
    </div>
  );
};

export default Expenses;
