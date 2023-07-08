import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
 

  return (
    <div className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
     <ExpenseDetails title={props.title} amount={props.amount} Location={props.Location}></ExpenseDetails>
    </div>
  );
};

export default ExpenseItem;
