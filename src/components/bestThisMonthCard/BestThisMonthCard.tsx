type searchResultsType = {
    title: string,
    category: string,
    price: string,
    image: string
}

const BestThisMonthCard = ({ title, category, price, image }: searchResultsType) => {
    return (
        <div className="flex m-5">
            <img className="object-cover min-w-[120px] rounded-md mr-3" src={image} alt="Book" />
            <div className="flex flex-col ml-3">
                <h2 className="text-lg font-semibold mb-5">{title}</h2>
                <p className="text-blue-500 font-semibold mb-5">${price}</p>
                <button className="bg-blue-950 text-white text-sm py-3 mr-1 rounded-full hover:bg-blue-600 min-w-24 max-w-24 mb-5">Buy Now</button>
            </div>
        </div>
    );
};

export default BestThisMonthCard;
