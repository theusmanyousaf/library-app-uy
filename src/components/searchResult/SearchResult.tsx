import { useScroll } from "../../hooks/useScroll";
import Book from '../../assets/Book.png'
import SearchResultCard from "../searchResultCard/SearchResultCard";

const SearchResult = () => {

  const { visibleBooks, handleMoreClick } = useScroll(9, 2)

  return (
    <div className="my-9 md:my-24 md:ml-[10.63%] md:mr-[10.417%]">
      <h2 className="md:text-[32px] text-[28px] font-bold text-center md:text-left md:mb-[30px] mb-[72px]">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 overflow-y-auto overflow-x-hidden">
        {visibleBooks.map((book) => (
          <SearchResultCard
            id={book.id}
            title={book.volumeInfo?.title}
            category={book.volumeInfo.categories?.join(', ')}
            price={book.saleInfo?.saleability}
            image={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo.imageLinks?.thumbnail : Book}
          />
        ))}
      </div>

      {visibleBooks.length <= 9 && visibleBooks.length >= 2 &&
        <div className="flex justify-center mt-7 bg-blue-100 text-blue-700 mx-5 md:mx-auto md:w-[362px] md:py-6 py-[13px] text-base font-bold hover:bg-blue-400 hover:text-gray-50 rounded-lg">
          <button
            onClick={handleMoreClick}
          >
            MORE
          </button>
        </div>}
    </div>
  );
};

export default SearchResult;
