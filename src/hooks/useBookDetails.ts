import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { nextBooks, prevBooks } from '../store/slices/relatedBooksSlice';
import { Book } from '../types/bookTypes';

export function useBookDetails() {
    const { id } = useParams<Record<string, string>>();
    const dispatch = useAppDispatch();
    const books = useSelector((state: RootState) => state.books.books).filter((book) => book.id !== id);
    const length = books.length;
    const currentIndex = useSelector((state: RootState) => state.related.currentIndex);
    const relatedBooks = books.slice(currentIndex, currentIndex + 5);
    const selectedBook = useSelector((state: RootState) => state.books.books).find(book => book.id === id) as Book;
    const prevBooksHandler = () => dispatch(prevBooks());
    const nextBooksHandler = () => dispatch(nextBooks());

    return { selectedBook, relatedBooks, prevBooksHandler, nextBooksHandler, currentIndex, length };
}
