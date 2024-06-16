type searchResultsType = {
    title: string,
    category: string,
    price: number,
    image: string
}

const SearchResult = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex items-center border p-4 rounded-lg shadow-sm">
            <div>
                <img className="mr-3" src={image} alt="Book"/>
            </div>
            <div className="flex flex-col justify-between ml-3">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <h4 className="text-gray-500 mb-4">{category}</h4>
                <p className="text-blue-500 font-semibold mb-4">${price}</p>
                <button className="bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-600 max-w-28">Buy Now</button>
            </div>
        </div>
    );
};

export default SearchResult;
