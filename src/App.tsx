import { useEffect, useState } from 'react';
import type { Expense } from './types';

export default function App() {

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const data = localStorage.getItem('expenses');
    return data ? JSON.parse(data) : []
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

  return (
    <>
      
    </>
  )
}