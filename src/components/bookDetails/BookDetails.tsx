import BookCover from '../../assets/Books-1.png'

const BookDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:flex-1 w-full mr-28 justify-items-start">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Design Theory: 
          </h1>
          <p className="text-4xl font-bold text-blue-900 mb-4">The Psychology of Graphic Design Pricing</p>
          <h2 className="text-xl font-semibold text-gray-700 my-4">A BOOK BY MICHAEL JANDA</h2>
          <p className="text-gray-600 my-6">
            After 15 years running my own studio, completing thousands of projects for high profile clients. 
            Now, I am sharing my golden strategies for pricing creative work.
          </p>
          <a 
            href="#" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
          >
            See on Google Books
          </a>
        </div>
        <div className="md:flex-shrink-0 mt-8 md:mt-0 md:ml-6 p-10 ml-28 bg-slate-100 justify-items-end">
          <img 
            className="h-72 w-54 object-cover mx-auto" 
            src={BookCover} 
            alt="Book Cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
