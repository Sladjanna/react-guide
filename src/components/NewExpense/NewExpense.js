import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };

        console.log('data in NewExpense.js');
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;