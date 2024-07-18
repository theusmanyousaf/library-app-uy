import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { nextBooks, prevBooks } from '../../store/slices/relatedBooksSlice';

export function useRelatedBooks(){
    const { id } = useParams<Record<string, string>>();
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books).filter((book) => book.id !== id);
    const currentIndex = useSelector((state: RootState) => state.related.currentIndex);
    const visibleBooks = books.slice(currentIndex, currentIndex + 5);
    const prevBooksHandler = () => dispatch(prevBooks())
    const nextBooksHandler = () => dispatch(nextBooks())

    return { visibleBooks, prevBooksHandler, nextBooksHandler, currentIndex, books }
}