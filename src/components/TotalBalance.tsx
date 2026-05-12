import type { Expense } from "../types";

export default function TotalBalance({expenses}: {expenses: Expense[]}) {
    return (
        <>
            <p>Total: {expenses.reduce((sum, expense) => sum + expense.amount, 0)}$</p>
        </>
    )
}