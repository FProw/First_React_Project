//My first Component
//You can only return one root element = only 1 parent (which in this case, a div element) is allowed
//Use className instead of class in jsx because "class" is used in js to create class

import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpensesDate from "./ExpenseDate";

// React only allows 1 parameter per component, doesn't explicitly have to be named "props"
function ExpenseItem(data) {
  const [update, setUpdate] = useState(data.title);

  return (
    <div className="expense-item">
      <ExpensesDate date={data.date} />
      <div className="expense-item__description">
        <h2>{update}</h2>
        <div className="expense-item__price ">${data.amount}</div>
      </div>
      <button onClick={() => setUpdate("Updated")}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
