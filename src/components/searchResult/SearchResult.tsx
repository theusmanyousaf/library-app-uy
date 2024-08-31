import { useScroll } from "../../hooks/useScroll";
import Book from '../../assets/book.png'
import SearchResultCard from "../searchResultCard/SearchResultCard";

const SearchResult = () => {

  const { visibleBooks, handleMoreClick } = useScroll(9, 2)

  return (
    <div className="flex flex-col mb-9 md:mb-24 mx-[19px] md:mx-[2%] lg:ml-[10.63%] lg:mr-[10.417%]">
      <h2 className="md:text-[32px] md:h-10 text-[28px] h-9 font-bold text-center md:text-left md:mb-[30px] mb-[72px]">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 md:gap-4 gap-10">
        {visibleBooks.map((book) => (
          <SearchResultCard
            key={book?.id}
            id={book?.id}
            title={book?.volumeInfo?.title}
            category={book?.volumeInfo?.categories?.join(', ')}
            price={book?.saleInfo?.saleability}
            image={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : Book}
          />
        ))}
      </div>

      {visibleBooks.length <= 9 && visibleBooks.length >= 2 &&
        <div onClick={handleMoreClick} className="flex justify-center mt-6 md:mt-[27px] bg-blue-100 text-blue-700 mx-5 md:mx-auto md:w-[362px] md:py-6 py-3  font-bold hover:bg-blue-400 hover:text-gray-50 rounded-lg">
          <button>
            MORE
          </button>
        </div>}
    </div>
  );
};

export default SearchResult;
