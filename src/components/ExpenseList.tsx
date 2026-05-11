import type { Expense } from "../types"
import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({expenses, onDelete}: {expenses: Expense[]; onDelete: (value: string) => void}) {
    return (
        <>
            {expenses.map((expense) => <ExpenseCard key={expense.id} expense={expense} onDelete={onDelete}/>)}
        </>
    )
}