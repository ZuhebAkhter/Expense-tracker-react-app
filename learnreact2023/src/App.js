import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DummyExpenses= [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "America",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "canada",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "canada",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "chicago",
  },
];



const App = () => {
 const [expenses,setExpenses] =useState(DummyExpenses);
 
 
  const addExpenseHandler=expense=>{
    setExpenses((prevExpenses)=>{
return [expense,...prevExpenses]
    });
  }
  return (
   <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}></Expenses>

   </div>      
  );
};

export default App;
