import { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { fetchSearchBooks } from "../store/slices/booksSlice";

export function useQuery(query: string) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (query) {
            dispatch(fetchSearchBooks(query));
        }
    }, [dispatch, query]);
}