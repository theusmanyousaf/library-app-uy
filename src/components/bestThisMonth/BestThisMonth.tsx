import BestThisMonthCard from '../bestThisMonthCard/BestThisMonthCard';
import bookImage from '../../assets/Books-1.png'


export default function BestThisMonth() {

    const results = [
        { title: "The World of Abstract Art", category: "Art & Design", price: "25.00", image: bookImage },
        { title: "Educated: a Memoir", category: "Education", price: "28.00", image: bookImage },
        { title: "The Blue Flowers Ray", category: "Novel", price: "19.50", image: bookImage },
        { title: "There There: a Novel by TO", category: "Novel", price: "20.00", image: bookImage },
        { title: "WMNDFL: The Inspiration", category: "Business", price: "23.00", image: bookImage },
        { title: "Making Things Happen", category: "Motivation", price: "23.00", image: bookImage },
    ];

    return (
        <div className="md:ml-10 col-span-1">
            <h2 className="text-3xl font-semibold text-left mb-6">Best This Month</h2>
            <div className="flex flex-col justify-between bg-slate-100 rounded-md">
                {results.slice(0, 4).map((result, index) => (
                    <BestThisMonthCard
                        key={index}
                        title={result.title}
                        category={result.category}
                        price={result.price}
                        image={result.image}
                    />
                ))}
                <button className="text-blue-700 hover:text-black rounded-b-lg font-bold py-4">SEE BEST BOOKS</button>
            </div>
        </div>
    )
}



