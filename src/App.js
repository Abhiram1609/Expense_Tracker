import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";

// function App() {
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Movie Ticket",
    amount: 200,
    date: new Date(2022, 8, 26),
  },
  { id: "e2", 
    title: "Mobile Recharge", 
    amount: 549, 
    date: new Date(2022, 7, 20) 
  },
  {
    id: "e3",
    title: "Smartphone",
    amount: 22000,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 68000,
    date: new Date(2021, 11, 12),
  },
  {
    id: "e5",
    title: "Cricket Bat",
    amount: 1000,
    date: new Date(2020, 2, 16),
  },
  {
    id: "e6",
    title: "Udemy Course",
    amount: 350,
    date: new Date(2020, 4, 6),
  },

];

const App = () => {
  //this format is 100% optional, not neccesary!
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div', {} ,
  //   React.createElement('h2', {} , "Lets get started"),
  //   React.createElement(Expenses,{item: expenses})
  // );
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          <Expenses item={expenses}></Expenses>
        </div>
      </header>
    </div>
  );
};

export default App;
