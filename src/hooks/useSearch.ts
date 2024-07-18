import { ChangeEvent, FormEvent } from 'react';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchSearchBooks } from '../store/slices/booksSlice';

export function useSearch() {
    const dispatch: AppDispatch = useDispatch();
    const query = useSelector((state: RootState) => state.books.query);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value));
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchSearchBooks(query));
    };

    return { handleInputChange, handleFormSubmit, query }
}