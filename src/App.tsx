import { useEffect, useState } from 'react';
import type { Expense } from './types';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalBalance from './components/TotalBalance';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

export default function App() {

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem('expenses');
    return data ? JSON.parse(data) : []
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('All');

  function addExpense(expense: Omit<Expense, 'id'>): void {
    const newExpense = {...expense, id: crypto.randomUUID()}
    setExpenses([...expenses, newExpense])
  }

  function deleteExpense(id: string): void {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => expense.title.includes(search)).filter((expense) => filter === 'All' ? true : expense.category === filter);

  return (
    <>
      <ExpenseForm onAdd={addExpense}/>
      <TotalBalance expenses={filteredExpenses}/>
      <SearchBar search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense}/>
    </>
  )
}