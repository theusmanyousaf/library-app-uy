import SearchResultCard from "../components/searchResultCard/SearchResultCard"
import BestThisMonth from "../components/bestThisMonth/BestThisMonth";
import bookImage from '../assets/Books-1.png'
import Category from "../components/catogory/Category";

function Home() {
  const results = [
    { title: "The World of Abstract Art", category: "Art & Design", price: 25.00, image: bookImage },
    { title: "Educated: a Memoir", category: "Education", price: 28.00, image: bookImage },
    { title: "The Blue Flowers Ray", category: "Novel", price: 19.50, image: bookImage },
    { title: "There There: a Novel by TO", category: "Novel", price: 20.00, image: bookImage },
    { title: "WMNDFL: The Inspiration", category: "Business", price: 23.00, image: bookImage },
    { title: "Making Things Happen", category: "Motivation", price: 23.00, image: bookImage },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-6 my-10">
        <div className="col-span-2">
          <h2 className="text-3xl font-semibold text-left mb-6">Recomended Books</h2>
          <div className="grid grid-cols-2 gap-4">
            {results.map((result, index) => (
              <SearchResultCard
                key={index}
                title={result.title}
                category={result.category}
                price={result.price}
                image={result.image}
              />
            ))}
          </div>
          <div className="grid col-span-2 mt-6">
            <button className="bg-blue-100 py-4 text-blue-700 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50 mb-8">MORE</button>
          </div>
        </div>
        <div className="ml-10 col-span-1">
          <h2 className="text-3xl font-semibold text-left mb-6">Best This Month</h2>
          <BestThisMonth />
        </div>
      </div>
      <Category />
    </>
  );
}

export default Home;
