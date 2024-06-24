import BookCover from '../../assets/Books-1.png'

const BookDetails = () => {
    return (
        <div className="my-16">
            <div className="flex md:items-center md:justify-between md:max-w-[1140px]">
                <div className='mr-[67px] mt-[46px] mb-14 max-w-[585px] flex flex-col'>
                    <h1 className="text-5xl font-bold text-yellow-500">
                        Design Theory:
                    </h1>
                    <p className="text-5xl font-bold text-blue-900 mb-7 my-1">The Psychology of Graphic Design Pricing</p>
                    <h2 className="text-xl font-semibold text-gray-700 mb-9">A BOOK BY MICHAEL JANDA</h2>
                    <p className="text-gray-600 mb-14 text-lg">
                        After 15 years running my own studio, completing thousands of projects for high profile clients.
                        Now, I am sharing my golden strategies for pricing creative work.
                    </p>
                    <a
                        href="https://books.google.com/"
                        className="max-h-[58px] h-full max-w-[228px] inline-block bg-blue-600 text-white px-6 rounded-md shadow-md hover:bg-blue-700"
                    >
                        <button className='py-4'>See on Google Books</button>
                    </a>
                </div>
                <div className="md:flex-shrink-0 mt-8 md:mt-0 md:px-[119px] px-[68px] md:py-[103px] py-[59px] bg-slate-100">
                    <img
                        className="md:h-[374px] md:w-[250px] w-36 h-[216px] object-cover"
                        src={BookCover}
                        alt="Book Cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
