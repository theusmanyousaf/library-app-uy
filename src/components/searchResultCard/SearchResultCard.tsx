import { FaHeart } from "react-icons/fa";

type searchResultsType = {
    title: string,
    category: string,
    price: string,
    image: string
}

const SearchResultCard = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex md:flex-row md:items-stretch items-center text-center md:text-left flex-col border p-3 rounded-md shadow-sm w-[270px] h-[336px] md:h-[260px] md:w-[358px] md:max-w-[358px] md:max-h-[260px]">
            <img className="object-center relative top-[-30px] md:top-0 md:w-40 w-[92px] md:h-[238px] h-[137px] rounded-md md:mr-3" src={image} alt="Book" />
            <div className="flex flex-col justify-between">
                <h2 className="text-sm font-semibold md:text-xl mb-4 md:mb-0">{title}</h2>
                <h4 className="text-gray-500 mb-4 md:mb-0">{category?category:category="undefined"}</h4>
                <p className="text-blue-500 font-semibold mb-4 md:mb-0">${price}</p>
                <div className="flex justify-around items-center">
                    <button className="bg-blue-950 text-white text-sm py-2 rounded-full hover:bg-blue-600 min-w-24 max-w-24">Buy Now</button>
                    <FaHeart size={20} className="text-gray-500" />
                </div>
            </div>

        </div>
    );
};

export default SearchResultCard;
