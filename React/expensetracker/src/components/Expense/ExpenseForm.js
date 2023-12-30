import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    console.log("in submit handler");
    event.preventDefault();

    const expense = {
      inputTitle: title,
      inputAmt: amount,
      inputDate: new Date(date),
    };
    console.log(expense);
    setTitle("");
    setAmount("");
    setDate("");
    props.onAddExpense(expense);
  };
  const titleChangeHandle = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const amountChangeHandle = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const dateChangeHandle = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleChangeHandle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandle} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" value={date} onChange={dateChangeHandle} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
