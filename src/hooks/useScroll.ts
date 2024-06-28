import { useState, useEffect } from "react";
import useRecommendedBooks from "./useRecommendedBooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Book } from "../types/bookTypes";

export function useScroll(desktopLimit: number, phoneLimit: number,initial?:number) {
    const { books, status, error, value } = useSelector((state: RootState) => state.books);
    const isDesktop = useRecommendedBooks(768);
    const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);

    useEffect(() => {
        setVisibleBooks(isDesktop ? books.slice(initial, desktopLimit) : books.slice(initial, phoneLimit));
    }, [books, isDesktop]);

    const handleMoreClick = () => {
        setVisibleBooks(books);
    };

    return {visibleBooks, status, error, value, handleMoreClick}

}