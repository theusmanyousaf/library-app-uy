import { searchResultsType } from "../../types/searchResultTypes";
import { Link } from "react-router-dom";

const BestThisMonthCard = ({ id, title, price, image }: searchResultsType) => {
    return (
        <div className="flex md:gap-[26.67px] gap-[14.54px] md:h-[177.5px] mr-7 md:mr-0">
            <Link key={id} to={`/book/${id}`}><img className="object-center h-[142px] w-[95.45px] sm:h-[177.5px] sm:w-[119px] rounded-md" src={image} alt="Book" /></Link>
            <div className="flex flex-col">
                <h2 className="font-bold md:text-[22px] mb-3 md:mb-[15px] mt-1 md:mt-[9px]">{title}</h2>
                <h2 className="text-xl text-blue-500 font-bold mb-3.5 md:mb-[21px]">{price}</h2>
                <div className="flex justify-center items-center bg-blue-950 text-white hover:bg-blue-600 rounded-full w-[101px] md:mb-[8.5px]">
                    <button className="text-sm py-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BestThisMonthCard;
