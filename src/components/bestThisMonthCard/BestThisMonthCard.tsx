import { searchResultsType } from "../../types/searchResultTypes";

const BestThisMonthCard = ({ title, price, image }: searchResultsType) => {
const BestThisMonthCard = ({ title, price, image }: searchResultsType) => {
    return (
        <div className="flex md:gap-[26.6px] gap-[14.5px]">
            <img className="object-center max-w-24 md:max-w-[120px] min-w-[95.5px] h-[142px] md:min-h-[177.5px] md:max-h-[177.5px] rounded-md" src={image} alt="Book" />
            <div className="flex flex-col justify-between md:pt-[9px] md:pb-[8.5px] px-1">
                <h2 className="font-bold italic md:text-[22px] md:h-[32px]">{title}</h2>
                <p className="text-xl text-blue-500 font-bold">{price}</p>
                <div className="flex justify-center items-center bg-blue-950 text-white hover:bg-blue-600 py-2 md:py-2 rounded-full max-w-[101px] ">
                    <button className="text-sm h-[20px]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BestThisMonthCard;
