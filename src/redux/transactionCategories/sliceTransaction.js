import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './operationsTransactions';

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
};

const transactionCategories = createSlice({
  name: 'transactionCategories',
  initialState,
  extraReducers: {
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const transactionCategoriesReducer = transactionCategories.reducer;
