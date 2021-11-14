import React from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const { onAddExpense } = props;
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
