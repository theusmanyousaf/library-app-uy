import BestThisMonthCard from '../bestThisMonthCard/BestThisMonthCard';
import Books from '../../assets/book.png'
import { useScroll } from '../../hooks/useScroll';

export default function BestThisMonth() {
    const { visibleBooks, status, error, value, handleMoreClick } = useScroll(14, 14, 10)
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col mt-14 md:mt-0 mx-[15px] md:mx-0 lg:min-w-[360px]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#183B56] text-center md:text-left md:mb-[30px] mb-9 h-9 md:h-10">Best This Month</h2>
            <div className="flex flex-col overflow-y-visible overflow-x-hidden bg-slate-100 rounded-md pt-[26px] md:pt-6 md:pl-6 pl-[15px]">
                <div className='flex flex-col mb-10 md:mb-[26.5px] gap-y-9 md:gap-y-[36.5px]'>
                    {visibleBooks.map((book) => (
                        <BestThisMonthCard
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo?.title.substring(0, 20)}
                            price={"$23.00"}
                            image={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : Books}
                        />
                    ))}
                </div>
                <hr className='mx-6' />
                {value &&
                    <div onClick={handleMoreClick} className='flex md:pb-[26px] md:pt-[25px] py-5 rounded-b-lg justify-center font-bold'>
                        <button className="text-blue-500 hover:text-black text-base h-5">SEE BEST BOOKS</button>
                    </div>}
            </div>
        </div>
    )
}



