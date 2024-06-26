// src/components/RecommendedBooks.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { fetchRecommendedBooks } from "../../store/slices/recommendedBooksSlice";
import SearchResultCard from "../searchResultCard/SearchResultCard";

export default function RecommendedBooks() {

    const dispatch = useAppDispatch();
    const { books, status, error } = useSelector((state: RootState) => state.recommeded);

    useEffect(() => {
        dispatch(fetchRecommendedBooks('react'));
    }, [dispatch]);

    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-left mb-6">Recommended Books</h2>
            <div className="md:grid md:grid-cols-2 md:gap-8">
                {isDesktop
                    ? books.slice(0,6).map((book) => (
                        <Link key={book.id} to={`/book/${book.id}`}>
                            <SearchResultCard
                                title={book.volumeInfo?.title}
                                category={book.volumeInfo?.categories?.[0]}
                                price={book.saleInfo?.saleability}
                                image={book.volumeInfo?.imageLinks?.thumbnail}
                            />
                        </Link>
                    ))
                    : books.slice(0, 1).map((book) => (
                        <Link key={book.id} to={`/book/${book.id}`}>
                            <SearchResultCard
                                title={book.volumeInfo?.title}
                                category={book.volumeInfo?.categories?.[0]}
                                price={book.saleInfo?.saleability}
                                image={book.volumeInfo?.imageLinks?.thumbnail}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="grid md:col-span-2 mt-8">
                <button className="bg-blue-100 py-5 text-blue-700 font-bold rounded-lg hover:bg-blue-400 hover:text-gray-50 mb-4">MORE</button>
            </div>
        </div>
    );
}