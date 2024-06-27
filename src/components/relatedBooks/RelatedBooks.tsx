import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";
import { nextBooks, prevBooks } from '../../store/slices/relatedBooksSlice';
import { RootState } from '../../store/store';

const RelatedBooks = () => {
    const { id } = useParams<Record<string, string>>();
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books).filter((book) => book.id !== id);
    const currentIndex = useSelector((state: RootState) => state.related.currentIndex);
    const visibleBooks = books.slice(currentIndex, currentIndex + 5);

    return (
        <div className="bg-blue-950 max-h-[548px] pt-14 pb-20 mt-8 mb-16 overflow-clip">
            <div className="flex justify-between items-center px-8">
                <div className=''>
                    <h2 className="text-white text-left text-3xl mb-1">Related Books</h2>
                </div>
                <div className="hidden md:flex mb-4">
                    <button
                        onClick={() => dispatch(prevBooks())}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'3rem'} />
                    </button>
                    <button
                        onClick={() => dispatch(nextBooks())}
                        disabled={currentIndex + 5 >= books.length}
                        className="text-white p-2 pr-0 disabled:opacity-50"
                    >
                        <VscArrowCircleRight size={'3rem'} />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row mt-14">
                <div className="flex space-x-4 mx-4">
                    {visibleBooks.map((book) => (
                        <Link key={book.id} to={`/book/${book.id}`}>
                            <img className="object-cover min-w-[204px] max-w-[204px] min-h-[298px] max-h-[298px] rounded-md" src={book.volumeInfo.imageLinks?.thumbnail} alt="Book" />
                        </Link>
                    ))}
                </div>
                <div className="flex mt-4 md:hidden">
                    <button
                        onClick={() => dispatch(prevBooks())}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'2rem'} />
                    </button>
                    <button
                        onClick={() => dispatch(nextBooks())}
                        disabled={currentIndex + 5 >= books.length}
                        className="text-white p-2 pr-0 disabled:opacity-50"
                    >
                        <VscArrowCircleRight size={'2rem'} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RelatedBooks;

