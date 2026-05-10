import { useEffect, useState } from 'react';
import type { Expense } from './types';
import ExpenseForm from './components/ExpenseForm';

export default function App() {

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem('expenses');
    return data ? JSON.parse(data) : []
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  function addExpense(expense: Omit<Expense, 'id'>): void {
    const newExpense = {...expense, id: crypto.randomUUID()}
    setExpenses([...expenses, newExpense])
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  return (
    <>
      <ExpenseForm onAdd={addExpense}/>
    </>
  )
}