import { useState, useEffect } from "react";
import SearchResultCard from "../components/searchResultCard/SearchResultCard"
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import bookImage from '../assets/Books-1.png'
import Category from "../components/catogory/Category";
import Contact from "../components/contact/Contact";

function Home() {
  const results = [
    { title: "The World of Abstract Art", category: "Art & Design", price: "25.00", image: bookImage },
    { title: "Educated: a Memoir", category: "Education", price: "28.00", image: bookImage },
    { title: "The Blue Flowers Ray", category: "Novel", price: "19.50", image: bookImage },
    { title: "There There: a Novel by TO", category: "Novel", price: "20.00", image: bookImage },
    { title: "WMNDFL: The Inspiration", category: "Business", price: "23.00", image: bookImage },
    { title: "Making Things Happen", category: "Motivation", price: "23.00", image: bookImage },
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
    <>
      <div className="md:flex md:justify-between mb-20 mt-12 md:max-h-[1012px] md:max-w-[1140px]">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold text-left mb-6">Recomended Books</h2>
          <div className="md:grid md:grid-cols-2 md:gap-8">
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
              : results.slice(0, 1).map((result, index) => (
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
          <div className="grid md:col-span-2 mt-8">
            <button className="bg-blue-100 py-5 text-blue-700 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50 mb-4">MORE</button>
          </div>
        </div>
        <div className="md:ml-10 col-span-1">
          <h2 className="text-3xl font-semibold text-left mb-6">Best This Month</h2>
          <BestThisMonth />
        </div>
      </div>
      <Category />
      <Contact />
    </>
  );
}

export default Home;
