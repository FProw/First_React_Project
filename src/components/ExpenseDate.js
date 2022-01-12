import "./ExpenseDate.css";

function ExpensesDate(data) {
  const month = data.date.toLocaleString("en-us", { month: "long" });
  const day = data.date.toLocaleString("en-us", { day: "2-digit" });
  const year = data.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpensesDate;
