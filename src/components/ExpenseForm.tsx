import { useState } from "react"
import type { Expense } from '../types';

export default function ExpenseForm({ onAdd }: { onAdd: (value: Omit<Expense, 'id'>) => void }) {

    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    return (
        <>  
            <form onSubmit={(e) => {e.preventDefault(); onAdd({title, amount: Number(amount), category}); setTitle(''); setAmount(''); setCategory('');}}>
                <input placeholder="expense" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input placeholder="cost" value={amount} onChange={(e) => setAmount(e.target.value)}/>
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