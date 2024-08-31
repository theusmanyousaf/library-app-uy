import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { nextBooks, prevBooks } from '../store/slices/relatedBooksSlice';
import { Book } from '../types/bookTypes';
import { useState } from 'react';

export function useBookDetails() {
    const dispatch = useAppDispatch();
    const [showLoader, setShowLoader] = useState(false);

    const startLoading = () => {
        setShowLoader(true);
        // Ensure loader is shown for at least 100ms
        setTimeout(() => {
            setShowLoader(false);
        }, 300);
    };

    const handlePrevNextClick = (handler: () => void) => {
        startLoading(); // Show loader when navigating
        handler(); // Call the navigation handler
    };
    const { id } = useParams<Record<string, string>>();
    const books = useSelector((state: RootState) => state.books.books).filter((book) => book.id !== id);
    const length = books.length;
    
    const currentIndex = useSelector((state: RootState) => state.related.currentIndex);
    const relatedBooks = books.slice(currentIndex, currentIndex + 5);
    const selectedBook = useSelector((state: RootState) => state.books.books).find(book => book.id === id) as Book;
    const prevBooksHandler = () => dispatch(prevBooks());
    const nextBooksHandler = () => dispatch(nextBooks());

    return { selectedBook, relatedBooks, prevBooksHandler, nextBooksHandler, currentIndex, length, handlePrevNextClick, showLoader };
}
