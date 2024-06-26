import SearchResultCard from "../searchResultCard/SearchResultCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const books = useSelector((state: RootState) => state.books.books);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="my-24 md:max-w-[1140px]">
      <h2 className="text-3xl font-semibold text-left mb-6">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {isDesktop
          ? books.slice(0, 9).map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <SearchResultCard
                title={book.volumeInfo.title}
                category={book.volumeInfo.categories?.join(', ')}
                price={book.saleInfo.saleability}
                image={book.volumeInfo.imageLinks.thumbnail}
              />
            </Link>
          ))
          : books.slice(0, 2).map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <SearchResultCard
                title={book.volumeInfo.title}
                category={book.volumeInfo.categories.join(', ')}
                price={book.saleInfo.saleability}
                image={book.volumeInfo.imageLinks.thumbnail}
              />
            </Link>
          ))
        }
      </div>
      <div className="flex justify-center mt-7">
        <button className="bg-blue-100 text-blue-700 py-6 px-44 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50">MORE</button>
      </div>
    </div>
  );
};

export default SearchResults;