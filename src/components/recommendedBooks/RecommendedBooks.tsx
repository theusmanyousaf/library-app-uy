import Book from '../../assets/book.png'
import { useScroll } from "../../hooks/useScroll";
import SearchResultCard from "../searchResultCard/SearchResultCard";
import { ThreeDots } from 'react-loader-spinner';

export default function RecommendedBooks() {

    const { visibleBooks, status, error, value, handleMoreClick } = useScroll(6, 6)

    if (status === 'loading') {
        return <div className='w-screen flex items-center justify-center h-[512px]'><ThreeDots radius={40} width='200' height='200' color='#1565D8' visible={true} /></div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col max-h-[492px] md:max-h-none">
            <h2 className="text-[28px] lg:text-[32px] font-bold text-[#183B56] text-center md:text-left md:mb-[30px] mb-[72px] h-9 lg:h-10">Recommended Books</h2>
            <div className="flex md:grid md:grid-cols-1 xl:grid-cols-2 gap-3.5 md:gap-8 md:ml-[3px] ml-5 overflow-x-auto">
                {visibleBooks.map((book) => (
                    <SearchResultCard
                        key={book?.id}
                        id={book?.id}
                        title={book?.volumeInfo?.title?.substring(0, 40)}
                        category={book?.volumeInfo?.categories?.join(', ')}
                        price={"$23.00"}
                        image={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : Book}
                    />
                ))}
            </div>
            {value && (
                <div onClick={handleMoreClick} className="grid mt-6 md:mt-[26px] font-bold bg-blue-100 md:pt-[25px] md:pb-[26px] py-3.5 rounded-lg text-blue-500 text-base  hover:bg-blue-400 hover:text-gray-50 mx-5 md:mx-0">
                    <button className="h-5">MORE RECOMMENDATIONS</button>
                </div>
            )}
        </div>
    );
}
