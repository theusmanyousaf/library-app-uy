import SearchResultCard from '../searchResultCard/SearchResultCard'
import bookImage from '../../assets/Books-1.png'


export default function BestThisMonth() {

    const results = [
        { title: "The World of Abstract Art", category: "Art & Design", price: 25.00, image: bookImage },
        { title: "Educated: a Memoir", category: "Education", price: 28.00, image: bookImage },
        { title: "The Blue Flowers Ray", category: "Novel", price: 19.50, image: bookImage },
        { title: "There There: a Novel by TO", category: "Novel", price: 20.00, image: bookImage },
        { title: "WMNDFL: The Inspiration", category: "Business", price: 23.00, image: bookImage },
        { title: "Making Things Happen", category: "Motivation", price: 23.00, image: bookImage },
    ];

    return (
        <div className="bg-slate-100 w-4/5 [border-none] [shadow-none]">
            {results.slice(0, 4).map((result, index) => (
                <SearchResultCard
                    key={index}
                    title={result.title}
                    category={result.category}
                    price={result.price}
                    image={result.image}
                />
            ))}
            <div className='grid justify-center'>
                <button className="text-blue-700 rounded-b-lg font-bold mb-4">SEE BEST BOOKS</button>
            </div>
        </div>
    )
}



