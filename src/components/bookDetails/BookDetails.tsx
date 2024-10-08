import BookCover from '../../assets/book.png'
import { Book } from "../../types/bookTypes";

const BookDetails = ({selectedBook}: {selectedBook:Book}) => {
    return (
        <div className="md:mb-24 mb-[27px] md:mt-4 mt-[113px] mx-5 md:mx-[4%] xl:ml-[8.75%] xl:mr-[12.08%]">
            <div className="flex items-center md:flex-row flex-col justify-center md:justify-between text-center md:text-left">
                <div className='xl:mr-[67px] md:mr-8 md:mt-[46px] md:mb-14 lg:w-full md:w-2/3 lg:max-w-[585px] flex flex-col'>
                    <h1 className="xl:text-5xl text-3xl font-bold text-yellow-500">
                        {selectedBook?.volumeInfo?.title}:
                    </h1>
                    <p className="xl:text-5xl text-3xl font-bold text-blue-900 mb-6 md:mt-0 md:mb-7 my-1">{selectedBook?.volumeInfo?.subtitle}</p>
                    <h2 className="text-xl font-semibold text-gray-700 md:mb-9">A BOOK BY {selectedBook?.volumeInfo?.authors}</h2>
                    <p className="text-gray-600 md:mb-14 mb-10">
                        {selectedBook?.searchInfo?.textSnippet}
                    </p>
                    <div className="text-white text-base font-bold">
                        <a
                            href={selectedBook?.volumeInfo?.previewLink}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <button className='py-[18px] px-6 bg-blue-600 hover:bg-blue-700 rounded-md shadow-md '>See on Google Books</button>
                        </a>
                    </div>
                </div>
                <div className="mt-8 min-h-[333px] lg:min-h-[580px] lg:w-full md:w-1/3 w-full md:mt-0 bg-slate-100 flex items-center justify-center">
                    <img
                        className="lg:h-[374px] lg:w-[250px] w-36 h-[216px] object-cover"
                        src={selectedBook?.volumeInfo?.imageLinks?.thumbnail ? selectedBook?.volumeInfo?.imageLinks?.thumbnail : BookCover}
                        alt="Book Cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
