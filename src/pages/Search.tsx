import SearchResults from "../components/searchResults/searchResults"


export default function Search() {
    return (
        <>
            <div className="flex flex-col items-center py-10 mt-32 mb-20">
                <h1 className="text-4xl font-semibold mb-12">Search Books</h1>
                <div className="w-full max-w-2xl">
                    <input
                        type="text"
                        placeholder="Search query"
                        className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-100"
                    />
                </div>
            </div>
            <SearchResults />
        </>
    )
}
