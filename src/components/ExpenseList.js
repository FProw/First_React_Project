import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseList.css";

function ExpenseList(data) {
  const amountOfItems = data.data.length;
  const items = [];
  for (let i = 0; i < amountOfItems; i++) {
    items.push(
      <ExpenseItem
        title={data.data[i].title}
        amount={data.data[i].amount}
        date={data.data[i].date}
      ></ExpenseItem>
    );
  }
  return (
    <div className="expenses">
      {/* <ExpenseItem
        title={data.data[0].title}
        amount={data.data[0].amount}
        date={data.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.data[1].title}
        amount={data.data[1].amount}
        date={data.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.data[2].title}
        amount={data.data[2].amount}
        date={data.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.data[3].title}
        amount={data.data[3].amount}
        date={data.data[3].date}
      ></ExpenseItem> */}
      {items}
    </div>
  );
}
export default ExpenseList;
