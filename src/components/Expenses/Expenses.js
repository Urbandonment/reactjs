import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2019');
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  // const filteredExpenses = items.filter((item) => {
  //   return item.date.getFullYear().toString() === filteredYear;
  // });

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
        {items
          .filter((item) => item.date.getFullYear().toString() === filteredYear)
          .map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
