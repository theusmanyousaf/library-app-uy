import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book } from '../../types/bookTypes';


interface BooksState {
  query: string;
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the async thunk for fetching books
export const fetchBooks = createAsyncThunk<Book[], string>(
  'books/fetchBooks',
  async (query) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBsxIthqH43jxXNjspuwNIIdBpkcOxq2mg`);
    return response.data.items;
  }
);

const initialState: BooksState = {
  query: '',
  books: [],
  status: 'idle',
  error: null,
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
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});

export const { setQuery } = booksSlice.actions;

export default booksSlice.reducer;