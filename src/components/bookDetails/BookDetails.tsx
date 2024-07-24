import { useBookDetails } from "./useBookDetails";
import Book from '../../assets/Book.png'

const BookDetails = () => {
    const book = useBookDetails()
    return (
        <div className="md:mb-24 mb-[27px] md:mt-4 mt-[113px] mx-5 md:ml-[8.75%] md:mr-[12.08%]">
            <div className="flex items-center md:flex-row flex-col justify-center md:justify-between text-center md:text-left">
                <div className='md:mr-[67px] md:mt-[46px] md:mb-14 max-w-[585px] flex flex-col'>
                    <h1 className="md:text-5xl text-3xl font-bold text-yellow-500">
                        {book?.volumeInfo.title}:
                    </h1>
                    <p className="md:text-5xl text-3xl font-bold text-blue-900 mb-6 md:mt-0 md:mb-7 my-1">{book?.volumeInfo.subtitle}</p>
                    <h2 className="text-xl font-semibold text-gray-700 md:mb-9">A BOOK BY {book?.volumeInfo.authors}</h2>
                    <p className="text-gray-600 md:mb-14 mb-10">
                        {book?.searchInfo?.textSnippet}
                    </p>
                    <div className="text-white text-base font-bold">
                        <a
                            href={book?.volumeInfo.previewLink}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <button className='py-[18px] px-6 bg-blue-600 hover:bg-blue-700 rounded-md shadow-md '>See on Google Books</button>
                        </a>
                    </div>
                </div>
                <div className="mt-8 min-h-[333px] xl:min-h-[580px] w-full md:mt-0 bg-slate-100 flex items-center justify-center">
                    <img
                        className="lg:h-[374px] lg:w-[250px] w-36 h-[216px] object-cover"
                        src={book?.volumeInfo.imageLinks?.thumbnail ? book?.volumeInfo.imageLinks?.thumbnail : Book}
                        alt="Book Cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
