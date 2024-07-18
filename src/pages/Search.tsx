import SearchResult from "../components/searchResult/SearchResult"
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../hooks/useSearch";

export default function Search() {

    const { handleInputChange, handleFormSubmit, query } = useSearch()    

    return (
        <>
            <div className="flex flex-col items-center py-11 mt-40 md:mb-20 mb-16">
                <h1 className="md:text-5xl font-semibold md:mb-16 mb-10 text-3xl">Search Books</h1>
                <div className="w-full max-w-2xl relative">
                    <form className="flex items-center" onSubmit={handleFormSubmit}>
                        <input
                            id="search"
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search query"
                            className="w-full md:px-6 md:py-6 px-4 py-3 pr-12 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                        />
                        <button type="submit" className="absolute right-0 top-0 md:mt-6 mt-4 md:mr-6 mr-4">
                            <FaSearch size={'1.25rem'} className="text-gray-400 hover:text-gray-500" />
                        </button>
                    </form>
                </div>
            </div>
            <SearchResult />
        </>
    )
}
