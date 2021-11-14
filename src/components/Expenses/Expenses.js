import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
// import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const { items } = props;
  let filteredExpenses;
  const [filteredYear, setFilteredYear] = useState('All');
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  if (filteredYear === 'All') {
    filteredExpenses = items;
  } else {
    filteredExpenses = items.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
    });
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
        {/* {items.filter(
          (item) => item.date.getFullYear().toString() === filteredYear
        ).length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          items.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          ))
        )} */}
        {<ExpenseList items={filteredExpenses} />}
      </Card>
    </div>
  );
}

export default Expenses;
