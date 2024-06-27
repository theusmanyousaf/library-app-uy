import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useRecommendedBooks from "../../hooks/useRecommendedBooks";
import SearchResultCard from "../searchResultCard/SearchResultCard";
import { Book } from "../../types/bookTypes";

const SearchResults = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const isDesktop = useRecommendedBooks(768);
  const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    setVisibleBooks(isDesktop ? books.slice(0, 9) : books.slice(0, 2));
  }, [books, isDesktop]);

  const handleMoreClick = () => {
    setVisibleBooks(books);
  };

  return (
    <div className="my-24 md:max-w-[1140px]">
      <h2 className="text-3xl font-semibold text-left mb-6">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto overflow-x-hidden max-h-[1012px]">
        {visibleBooks.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <SearchResultCard
              title={book.volumeInfo?.title}
              category={book.volumeInfo.categories?.join(', ')}
              price={book.saleInfo?.saleability}
              image={book.volumeInfo.imageLinks?.thumbnail}
            />
          </Link>
        ))}
      </div>
      {visibleBooks.length < books.length && (
        <div className="flex justify-center mt-7">
          <button 
            className="bg-blue-100 text-blue-700 py-6 px-44 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50" 
            onClick={handleMoreClick}
          >
            MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
