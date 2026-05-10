import { useState } from "react"
import type { Expense } from '../types';

export default function ExpenseForm({ onAdd }: { onAdd: (value: Omit<Expense, 'id'>) => void }) {

    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>('');

    return (
        <>  
            <form onSubmit={(e) => {e.preventDefault(); onAdd({title, amount, category}); setTitle(''); setAmount(0); setCategory('');}}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option>Food</option>
                    <option>Games</option>
                    <option>Transport</option>
                    <option>Other</option>
                </select>
                <button>submit</button>
            </form>
        </>
    )
}