import { FaHeart } from "react-icons/fa";

type searchResultsType = {
    title: string,
    category: string,
    price: string,
    image: string
}

const SearchResultCard = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex border p-3 rounded-md shadow-sm">
            <img className="object-center md:w-40 md:h-[238px] rounded-md" src={image} alt="Book" />
            <div className="flex flex-col ml-3 justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>
                <h4 className="text-gray-500">{category}</h4>
                <p className="text-blue-500 font-semibold">${price}</p>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-950 text-white text-sm py-2 mr-1 rounded-full hover:bg-blue-600 min-w-24 max-w-24">Buy Now</button>
                    <FaHeart size={20} className="text-gray-500" />
                </div>
            </div>

        </div>
    );
};

export default SearchResultCard;
