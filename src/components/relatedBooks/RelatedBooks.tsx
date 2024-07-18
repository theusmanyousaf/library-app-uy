import { Link } from 'react-router-dom';
import Book from '../../assets/Book.png'
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";
import { useRelatedBooks } from './useRelatedBooks';


const RelatedBooks = () => {
    
    const { visibleBooks, prevBooksHandler, nextBooksHandler, currentIndex, books } = useRelatedBooks()

    return (
        <div className="bg-blue-950 max-h-[548px] pt-14 pb-20 mt-8 mb-16 overflow-clip">
            <div className="flex justify-between items-center px-8">
                <div className=''>
                    <h2 className="text-white text-left text-3xl mb-1">Related Books</h2>
                </div>
                <div className="hidden md:flex mb-4">
                    <button
                        onClick={prevBooksHandler}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'3rem'} />
                    </button>
                    <button
                        onClick={nextBooksHandler}
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
                            <img className="object-cover min-w-[204px] max-w-[204px] min-h-[298px] max-h-[298px] rounded-md" src={book.volumeInfo.imageLinks?.thumbnail? book.volumeInfo.imageLinks?.thumbnail: Book} alt="Book" />
                        </Link>
                    ))}
                </div>
                <div className="flex mt-4 md:hidden">
                    <button
                        onClick={prevBooksHandler}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'2rem'} />
                    </button>
                    <button
                        onClick={nextBooksHandler}
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

