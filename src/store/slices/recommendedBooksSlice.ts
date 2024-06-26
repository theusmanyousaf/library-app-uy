import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../../services/googleBooksService';
import { Book } from '../../types/bookTypes';

// Initial state
const initialState = {
  books: [] as Book[],
  status: 'idle',
  error: null as string | null,
};

export const fetchRecommendedBooks = createAsyncThunk(
  'books/fetchRecommendedBooks',
  async (query: string) => {
    const books = await fetchBooks(query);
    console.log(books)
    return books;
  }
);

const recommededBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default recommededBooksSlice.reducer;
