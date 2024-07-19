import { Link } from "react-router-dom";
import Book from '../../assets/Book.png'
import { useScroll } from "../../hooks/useScroll";
import SearchResultCard from "../searchResultCard/SearchResultCard";

export default function RecommendedBooks() {
    
    const { visibleBooks, status, error, value, handleMoreClick } = useScroll(6, 1)

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-left mb-6">Recommended Books</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 overflow-y-visible overflow-x-hidden max-h-[942px]">
                {visibleBooks.map((book) => (
                    <Link key={book.id} to={`/book/${book.id}`}>
                        <SearchResultCard
                            title={book.volumeInfo?.title}
                            category={book.volumeInfo.categories?.join(', ')}
                            price={book.saleInfo?.saleability}
                            image={book.volumeInfo.imageLinks?.thumbnail? book.volumeInfo.imageLinks?.thumbnail: Book}
                        />
                    </Link>
                ))}
            </div>
            {value && (
                <div className="grid md:col-span-2 mt-8">
                    <button onClick={handleMoreClick} className="bg-blue-100 py-5 text-blue-700 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50 mb-4">MORE</button>
                </div>
            )}
        </div>
    );
}
