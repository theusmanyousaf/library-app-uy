import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import menuReducer from './slices/MenuSlice';
import booksReducer from './slices/booksSlice';
import relatedBooksReducer from './slices/relatedBooksSlice'
import { useDispatch } from 'react-redux';

const persistConfig = {
    key: 'root',
    storage,
};

let rootReducer =  combineReducers({
    menu: menuReducer,
    books: booksReducer,
    related: relatedBooksReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;