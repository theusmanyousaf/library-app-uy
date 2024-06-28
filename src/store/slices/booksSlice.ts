import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../../services/googleBooksService';
import { Book } from '../../types/bookTypes';


interface BooksState {
  query: string;
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  value: boolean
}

// Define the async thunk for fetching books
export const fetchSearchBooks = createAsyncThunk<Book[], string>(
  'books/fetchBooks',
  async (query: string) => {
    const books = await fetchBooks(query);
    return books;
  }
);

const initialState: BooksState = {
  query: '',
  books: [],
  status: 'idle',
  error: null,
  value: true
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchSearchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});

export const { setQuery } = booksSlice.actions;

export default booksSlice.reducer;