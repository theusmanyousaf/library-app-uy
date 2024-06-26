import SearchResults from "../components/searchResults/searchResults"
import { ChangeEvent, FormEvent } from 'react';
import { AppDispatch, RootState } from '../store/store';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchBooks } from '../store/slices/booksSlice';

export default function Search() {

    const dispatch: AppDispatch = useDispatch();
    const query = useSelector((state: RootState) => state.books.query);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value));
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchBooks(query));
    };

    return (
        <>
            <div className="flex flex-col items-center py-11 mt-40 mb-20">
                <h1 className="text-6xl font-semibold mb-16">Search Books</h1>
                <div className="w-full max-w-2xl relative">
                    <form className="flex items-center" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search query"
                            className="w-full p-6 pr-12 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-6 mr-6">
                            <FaSearch size={'1.5rem'} className="text-gray-400 hover:text-gray-500" />
                        </button>
                    </form>
                </div>
            </div>
            <SearchResults />
        </>
    )
}
