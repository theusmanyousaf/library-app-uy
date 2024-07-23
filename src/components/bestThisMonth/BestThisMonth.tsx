import BestThisMonthCard from '../bestThisMonthCard/BestThisMonthCard';
import Books from '../../assets/Book.png'
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';

export default function BestThisMonth() {
    const { visibleBooks, status, error, value, handleMoreClick } = useScroll(14, 14, 10)
    const { visibleBooks, status, error, value, handleMoreClick } = useScroll(14, 14, 10)
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="mt-14 md:mt-0 md:h-[1012px] overflow-y-visible overflow-x-hidden mx-[15px] md:mx-0">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#183B56] text-left md:mb-[30px] mb-9 h-9 md:h-10">Best This Month</h2>
            <div className="flex flex-col pt-[26px] px-[15px] md:pt-6 md:pl-6 bg-slate-100 rounded-md md:w-[360px]">
                <div className='flex flex-col mb-10 md:mb-[26.5px] gap-y-9 md:gap-y-[36.5px]'>
                    {visibleBooks.map((book) => (
                        <Link key={book.id} to={`/book/${book.id}`}>
                            <BestThisMonthCard
                                title={book.volumeInfo?.title.substring(0, 20)}
                                price={book.saleInfo.saleability}
                                image={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : Books}
                            />
                        </Link>
                    ))}
                </div>
                <hr />
                {value &&
                    <div className='flex md:pb-[26px] md:pt-[25px] py-5 rounded-b-lg justify-center font-bold'>
                        <button onClick={handleMoreClick} className="text-blue-500 hover:text-black text-base h-5">SEE BEST BOOKS</button>
                    </div>}
            </div>
        </div>
    )
}



