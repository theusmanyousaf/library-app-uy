import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice";
import booksReducer from './slices/booksSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        books: booksReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;