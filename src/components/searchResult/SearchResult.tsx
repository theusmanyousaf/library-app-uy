import { Link } from 'react-router-dom';
import { useScroll } from "../../hooks/useScroll";
import Book from '../../assets/Book.png'
import SearchResultCard from "../searchResultCard/SearchResultCard";

const SearchResult = () => {

  const { visibleBooks, handleMoreClick } = useScroll(9, 2)
  
  return (
    <div className="my-24 md:max-w-[1140px]">
      <h2 className="text-3xl font-semibold text-left mb-6">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto overflow-x-hidden max-h-[942px]">
        {visibleBooks.map((book) => (          
          <Link key={book.id} to={`/book/${book.id}`}>
            <SearchResultCard
              id={book.id}
              title={book.volumeInfo?.title}
              category={book.volumeInfo.categories?.join(', ')}
              price={book.saleInfo?.saleability}
              image={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : Book}
            />
          </Link>
        ))}
      </div>

      { visibleBooks.length <= 9 && visibleBooks.length >= 2 &&
        <div className="flex justify-center mt-7">
          <button
            className="bg-blue-100 text-blue-700 py-6 px-44 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50"
            onClick={handleMoreClick}
          >
            MORE
          </button>
        </div>}
    </div>
  );
};

export default SearchResult;
