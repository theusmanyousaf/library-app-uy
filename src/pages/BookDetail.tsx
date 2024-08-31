import BookDetails from "../components/bookDetails/BookDetails"
import { useBookDetails } from "../hooks/useBookDetails"
import RelatedBooks from "../components/relatedBooks/RelatedBooks"

export default function BookDetail() {
  const { selectedBook, relatedBooks, prevBooksHandler, nextBooksHandler, currentIndex, length } = useBookDetails();
  return (
    <div>
      <BookDetails selectedBook={selectedBook} />
      <RelatedBooks relatedBooks={relatedBooks} prevBooksHandler={prevBooksHandler} nextBooksHandler={nextBooksHandler} currentIndex={currentIndex} length={length} />
    </div>
  )
}
