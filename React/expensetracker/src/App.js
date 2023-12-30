import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Person from "./components/Person";
import NewExpense from "./components/Expense/NewExpense";
import { useState, useEffect } from "react";

function App() {
  const expenses = [
    {
      id: 101,
      title: "Groceries",
      amount: 900,
      date: new Date(2023, 7, 14),
    },
    { id: 102, title: "New TV", amount: 34000, date: new Date(2021, 2, 12) },
    {
      id: 103,
      title: "SofaSet",
      amount: 25000,
      date: new Date(2021, 2, 28),
    },
  ];
  const [expArr, setExpArr] = useState(expenses);
  const onDataHandler = (newData) => {
    console.log("in app js", newData);
    setExpArr([newData, ...expArr]);

    console.log(expArr);
  };
  useEffect(() => {
    console.log("Updated expArr:", expArr);
  }, [expArr]);

  return (
    <div className="App">
      <h2>Welcome to React!</h2>
      <Person name="Kshitij" />
      <NewExpense onIncomingData={onDataHandler} />
      <select>
        <option name="years">2023</option>
        <option name="years">2022</option>
        <option name="years">2021</option>
      </select>

      {expArr.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
