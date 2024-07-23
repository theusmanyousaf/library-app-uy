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
        <div className="overflow-y-visible overflow-x-hidden md:min-w-[751px]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#183B56] text-left md:mb-[30px] mb-12 h-9 md:h-10">Recommended Books</h2>
            <div className="grid md:grid-cols-2 gap-8 ml-[3px]">
                {visibleBooks.map((book) => (
                    <SearchResultCard
                        id={book.id}
                        title={book.volumeInfo?.title?.substring(0, 40)}
                        category={book.volumeInfo.categories?.join(', ')}
                        price={book.saleInfo?.saleability}
                        image={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : Book}
                    />
                ))}
            </div>
            {value && (
                <div className="grid mt-6 md:mt-[27px] font-bold bg-blue-100 md:pt-[25px] md:pb-[26px] py-3.5 rounded-lg text-blue-500 text-base  hover:bg-blue-400 hover:text-gray-50 mx-5 md:mx-0">
                    <button onClick={handleMoreClick} className="h-5">MORE RECOMMENDATIONS</button>
                </div>
            )}
        </div>
    );
}
