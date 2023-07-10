import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import './ExpenseItem.css';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
 

  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
     <ExpenseDetails title={props.title} amount={props.amount} Location={props.location}></ExpenseDetails>
    <button>Delete Expenses</button>
    </Card>
  );
};

export default ExpenseItem;
