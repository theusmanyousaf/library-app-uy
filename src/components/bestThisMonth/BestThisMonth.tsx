import BestThisMonthCard from '../bestThisMonthCard/BestThisMonthCard';
import Books from '../../assets/Book.png'
import { Link } from 'react-router-dom';
import { query } from '../../constants/query';
import { useQuery } from '../../hooks/useQuery';
import { useScroll } from '../../hooks/useScroll';

export default function BestThisMonth() {
    useQuery(query)
    const {visibleBooks,status, error, value, handleMoreClick} = useScroll(14,14,10)
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="md:ml-10 mt-12 md:mt-0 col-span-1 md:max-h-[1012px]">
            <h2 className="text-3xl font-semibold text-left mb-6">Best This Month</h2>
            <div className="grid justify-between bg-slate-100 rounded-md overflow-y-auto overflow-x-hidden max-h-[942px]">
                {visibleBooks.map((book) => (
                    <Link key={book.id} to={`/book/${book.id}`}>
                        <BestThisMonthCard
                            title={book.volumeInfo?.title.substring(0,25)}
                            author={book.volumeInfo.authors?.slice(0,1).join(", ").substring(0,40)}
                            image={book.volumeInfo.imageLinks?.thumbnail? book.volumeInfo.imageLinks?.thumbnail: Books}
                        />
                    </Link>
                ))}
                { !value &&
                    <button onClick={handleMoreClick} className="text-blue-700 hover:text-black rounded-b-lg font-bold py-6">SEE BEST BOOKS</button>
                }
            </div>
        </div>
    )
}



