import SearchResultCard from "../searchResultCard/SearchResultCard";
import bookImage from '../../assets/Books-1.png'
import { useState,useEffect } from "react";

const SearchResults = () => {
  const results = [
    { title: "The World of Abstract Art", category: "Art & Design", price: "25.00", image: bookImage },
    { title: "Educated: a Memoir", category: "Education", price: "28.00", image: bookImage },
    { title: "The Blue Flowers Ray", category: "Novel", price: "19.50", image: bookImage },
    { title: "There There: a Novel by TO", category: "Novel", price: "20.00", image: bookImage },
    { title: "WMNDFL: The Inspiration", category: "Business", price: "23.00", image: bookImage },
    { title: "Making Things Happen", category: "Motivation", price: "23.00", image: bookImage },
    { title: "Book of five rings", category: "Novel", price: "30.00", image: bookImage },
    { title: "The Glory within", category: "Motivation", price: "13.60", image: bookImage },
    { title: "Eat That Frog", category: "Motivation", price: "45.00", image: bookImage },
  ];

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
              ? results.map((result, index) => (
                <SearchResultCard
                  key={index}
                  title={result.title}
                  category={result.category}
                  price={result.price}
                  image={result.image}
                />
              ))
              : results.slice(0, 2).map((result, index) => (
                <SearchResultCard
                  key={index}
                  title={result.title}
                  category={result.category}
                  price={result.price}
                  image={result.image}
                />
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