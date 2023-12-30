import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const newExpense = (expense) => {
    console.log("in new expense", expense);
    const newData = {
      ...expense,
      id: Math.random().toString(),
    };
    //checkingggg
    console.log(newData);
    props.onIncomingData(newData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={newExpense} />
    </div>
  );
};
export default NewExpense;
