import React,{useState} from "react";
// import './ExpenseItem.css';
import './ExpensesDetails.css'


const ExpenseDetails = (props) => {
  let [amount,setAmount]= useState(props.amount)
  const clickhandler=()=>{
    setAmount("100$")
  }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${amount}</div>
      <div className="location_item">{props.Location}</div>
      <button onClick={clickhandler}>Change amount</button>

    </div>
    
  );
};

export default ExpenseDetails;
