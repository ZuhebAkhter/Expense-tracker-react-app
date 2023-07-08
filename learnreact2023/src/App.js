import React from "react";
import ExpenseItem from "./Components/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "America",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "canada",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "canada",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "chicago",
    },
  ];
  return (
    <div>
      <h2>Is it working</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        Location={expenses[0].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        Location={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        Location={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        Location={expenses[3].LocationOfExpenditure}
      ></ExpenseItem>
    </div>
  );
};

export default App;
