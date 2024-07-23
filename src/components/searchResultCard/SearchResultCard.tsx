import { FaHeart } from "react-icons/fa";
import { searchResultsCardType } from "../../types/searchResultTypes";
import { Link } from "react-router-dom";

const SearchResultCard = ({id, title, category, price, image}: searchResultsCardType) => {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-left border rounded-md shadow-sm md:py-[11px] md:pl-[11px] md:h-[260px] md:w-[358px] md:gap-2">
            <Link key={id} to={`/book/${id}`} className="object-center relative -top-6 md:left-0 left-[89px] md:top-0"><img className="w-[92px] h-[137px] md:min-w-[160px] md:h-full rounded-md" src={image} alt="Book" /></Link>
            <div className="flex flex-col md:my-[13px] relative md:items-baseline items-center">
                <h2 className="text-xl italic font-semibold md:text-2xl md:mb-4 mb-3">{title.substring(0,20)}</h2>
                <h4 className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{category?category:category="undefined"}</h4>
                <p className="text-blue-500 md:text-xl text-base font-bold mb-5 md:mb-[26px]">${price}</p>
                <div className="flex justify-center items-center pb-8 md:pb-0">
                    <button className="bg-blue-950 text-white text-sm py-2 rounded-full hover:bg-blue-600 min-w-24 max-w-24 mr-[19px]">Buy Now</button>
                    <FaHeart size={20} className="text-gray-400 mr-[26px]" />
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;
