import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useParams } from 'react-router-dom';

export function useBookDetails(){
    const { id } = useParams<Record<string, string>>();

    const books = useSelector((state: RootState) => state.books.books);
    const book = books.find(book => book.id === id)
    return book
}