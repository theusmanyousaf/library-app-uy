import React, { useState } from 'react';
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";
import '../../styles/index.css'

const RelatedBooks = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const books = [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' },
        { id: 3, title: 'Book 3' },
        { id: 4, title: 'Book 4' },
        { id: 5, title: 'Book 5' },
        { id: 6, title: 'Book 6' },
        { id: 7, title: 'Book 7' },
        { id: 8, title: 'Book 8' },
        { id: 9, title: 'Book 9' },
        { id: 10, title: 'Book 10' },
        { id: 11, title: 'Book 11' },
        { id: 12, title: 'Book 12' },
    ];

    const visibleBooks = books.slice(currentIndex, currentIndex + 5);

    const nextBooks = () => {
        if (currentIndex + 5 < books.length) {
            setCurrentIndex(currentIndex + 5);
        }
    };

    const prevBooks = () => {
        if (currentIndex - 5 >= 0) {
            setCurrentIndex(currentIndex - 5);
        }
    };

    return (
        <div className="bg-blue-950 py-8 my-16" id='no-margin'>
            <div className="relative mb-12">
                <div className='absolute top-0 left-0 ml-4'>
                    <h2 className="text-white text-left pl-28 mb-8 text-2xl">Related Books</h2>
                </div>
                <div className="hidden md:flex absolute right-12 mr-4">
                    <button
                        onClick={prevBooks}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'2rem'} />
                    </button>
                    <button
                        onClick={nextBooks}
                        disabled={currentIndex + 5 >= books.length}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleRight size={'2rem'} />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="flex space-x-4 mx-4">
                    {visibleBooks.map((book) => (
                        <div
                            key={book.id}
                            className="w-40 h-60 bg-red-500 flex items-center justify-center text-white rounded"
                        >
                            {book.title}
                        </div>
                    ))}
                </div>
                <div className="flex mt-4 md:hidden">
                    <button
                        onClick={prevBooks}
                        disabled={currentIndex === 0}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleLeft size={'2rem'} />
                    </button>
                    <button
                        onClick={nextBooks}
                        disabled={currentIndex + 2 >= books.length}
                        className="text-white p-2 disabled:opacity-50"
                    >
                        <VscArrowCircleRight size={'2rem'} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RelatedBooks;

