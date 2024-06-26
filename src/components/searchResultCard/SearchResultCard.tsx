import { FaHeart } from "react-icons/fa";

type searchResultsType = {
    title: string,
    category: string,
    price: string,
    image: string
}

const SearchResultCard = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex border p-3 rounded-md shadow-sm md:max-w-[358px] md:max-h-[260px]">
            <img className="object-center md:w-40 w-[92px] md:h-[238px] h-[137px] rounded-md mr-3" src={image} alt="Book" />
            <div className="flex flex-col justify-between">
                <h2 className="text-sm font-semibold md:text-xl">{title}</h2>
                <h4 className="text-sm text-gray-500 md:text-xl">{category}</h4>
                <p className="text-sm text-blue-500 font-semibold md:text-xl">${price}</p>
                <div className="flex justify-around items-center">
                    <button className="bg-blue-950 text-white text-sm py-2 rounded-full hover:bg-blue-600 min-w-24 max-w-24">Buy Now</button>
                    <FaHeart size={20} className="text-gray-500" />
                </div>
            </div>

        </div>
    );
};

export default SearchResultCard;
