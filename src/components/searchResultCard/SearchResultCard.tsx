type searchResultsType = {
    title: string,
    category: string,
    price: number,
    image: string
}

const SearchResult = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex items-center border p-4 rounded-lg shadow-sm">
            <img className="mr-4" src={image} />
            <div className="flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <p className="text-gray-500 mb-1">{category}</p>
                <p className="text-blue-500 font-semibold mb-2">${price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Buy Now</button>
            </div>
        </div>
    );
};

export default SearchResult;
