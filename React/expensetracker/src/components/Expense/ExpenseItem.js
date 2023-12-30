import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const resetHandler = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="expense-item">
      {/* Calling Expense Date Component */}
      <ExpenseDate expdate={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">Rs.{props.amount}</p>
        <div>
          <label>Change Title</label>
          <br></br>
          <input
            type="text"
            id="newTitle"
            value={title}
            onChange={resetHandler}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
