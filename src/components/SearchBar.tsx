export default function SearchBar({search, setSearch}: {search: string, setSearch: (value: string) => void}) {
    return (
        <>
            <input placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}