import type { Expense } from "../types"

export default function ExpenseCard({expense, onDelete}: {expense: Expense; onDelete: (value: string) => void}) {
    return (
        <>
            <p>{expense.title}</p>
            <p>Cost: {expense.amount}$</p>
            <p>Category: {expense.category}</p>
            <button onClick={() => onDelete(expense.id)}>Delete</button>
        </>
    )
}