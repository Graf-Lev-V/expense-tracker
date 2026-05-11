export default function Filter({filter, setFilter}: {filter: string; setFilter: (value: string) => void}) {
    return (
        <>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option>All</option>
                <option>Food</option>
                <option>Games</option>
                <option>Transport</option>
                <option>Other</option>
            </select>
        </>
    )
}