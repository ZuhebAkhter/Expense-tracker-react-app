import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {filteredExpenses.length===0 && <div><p>Only single Expense here. Please add more..." */}
{/* </p></div>} */}
{filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...
</p>  }
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p> 
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
