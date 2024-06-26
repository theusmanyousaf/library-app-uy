import BestThisMonthCard from '../bestThisMonthCard/BestThisMonthCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { fetchSearchBooks } from "../../store/slices/booksSlice";
import { query } from '../../constants/query';
import { Link } from 'react-router-dom';

export default function BestThisMonth() {
    const dispatch = useAppDispatch();
    const { books, status, error } = useSelector((state: RootState) => state.books);

    useEffect(() => {
        dispatch(fetchSearchBooks(query));
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="md:ml-10 col-span-1 max-h-[1012px]">
            <h2 className="text-3xl font-semibold text-left mb-6">Best This Month</h2>
            <div className="flex flex-col justify-between bg-slate-100 rounded-md">
                {books.slice(15, 19).map((book) => (
                    <Link key={book.id} to={`/book/${book.id}`}>
                        <BestThisMonthCard
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors?.join(", ")}
                            image={book.volumeInfo.imageLinks.thumbnail}
                        />
                    </Link>
                ))}
                <button className="text-blue-700 hover:text-black rounded-b-lg font-bold py-6">SEE BEST BOOKS</button>
            </div>
        </div>
    )
}



