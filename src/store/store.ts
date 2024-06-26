import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice";
import booksReducer from './slices/booksSlice'
import recommendedBooksReducer from './slices/recommendedBooksSlice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        books: booksReducer,
        recommeded: recommendedBooksReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;