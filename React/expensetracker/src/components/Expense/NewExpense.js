import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [openFlag, isFlag] = useState(false);
  const newExpense = (expense) => {
    console.log("in new expense", expense);
    const newData = {
      ...expense,
      id: Math.random().toString(),
    };
    //checkingggg
    console.log(newData);
    props.onIncomingData(newData);
    isFlag(false);
  };
  const btnHandler = (event) => {
    isFlag(true);
  };
  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        {openFlag === false ? (
          <button type="submit" onClick={btnHandler}>
            Add New Expense
          </button>
        ) : null}

        {openFlag === true ? <ExpenseForm onAddExpense={newExpense} /> : null}
      </div>
    </div>
  );
};
export default NewExpense;
