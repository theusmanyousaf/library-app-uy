import { Book } from "./bookTypes";

export interface BooksState {
    query: string;
    books: Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }