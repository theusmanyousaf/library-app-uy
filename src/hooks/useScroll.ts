import { useState, useEffect } from "react";
import useRecommendedBooks from "./useRecommendedBooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Book } from "../types/bookTypes";
import { useQuery } from "./useQuery";
import { query } from "../constants/query";

export function useScroll(desktopLimit: number, phoneLimit: number,initial?:number) {
    const { books, status, error } = useSelector((state: RootState) => state.books);
    const isDesktop = useRecommendedBooks(767);
    const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
    const [value, setValue] = useState(true)

    useEffect(() => {
        setVisibleBooks(isDesktop ? books.slice(initial, desktopLimit) : books.slice(initial, phoneLimit));
    }, [books, isDesktop, desktopLimit, initial, phoneLimit]);

    const handleMoreClick = () => {
        setVisibleBooks(books);
        setValue(false)
    };

    useQuery(query)

    return {visibleBooks, status, error, value, setValue, handleMoreClick}

}