import { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setForm(false);
  };

  const showFormHandler = () => {
    setForm(true);
  };

  const hideFormHandler = () => {
    setForm(false);
  };

  return (
    <div className="new-expense">
      {!form ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseFrom
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
