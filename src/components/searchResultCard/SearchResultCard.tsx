type searchResultsType = {
    title: string,
    category: string,
    price: number,
    image: string
}

const SearchResultCard = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex border p-4 rounded-lg shadow-sm">
            <div>
                <img className="mr-3 object-cover" src={image} alt="Book"/>
            </div>
            <div className="flex flex-col ml-3 justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>
                <h4 className="text-gray-500">{category}</h4>
                <p className="text-blue-500 font-semibold">${price}</p>
                <button className="bg-blue-950 text-white py-2 rounded-full hover:bg-blue-600 min-w-28 max-w-28">Buy Now</button>
            </div>
        </div>
    );
};

export default SearchResultCard;
