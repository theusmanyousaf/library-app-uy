import { createSlice } from '@reduxjs/toolkit';
import { RelatedBooksState } from '../../types/bookStateTypes';

const initialState: RelatedBooksState = {
    currentIndex: 0,
};

const relatedBooksSlice = createSlice({
    name: 'relatedBooks',
    initialState,
    reducers: {
        nextBooks(state) {
            state.currentIndex += 5;
        },
        prevBooks(state) {
            state.currentIndex -= 5;
        },
        resetIndex(state) {
            state.currentIndex = 0;
        },
    },
});

export const { nextBooks, prevBooks, resetIndex } = relatedBooksSlice.actions;
export default relatedBooksSlice.reducer;