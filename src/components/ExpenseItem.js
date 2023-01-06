import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>date 06.01.2023.</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$299.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
