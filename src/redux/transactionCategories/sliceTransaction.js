import { createSlice } from '@reduxjs/toolkit';
import {getCategories} from "./operationsTransactions"
import { categories } from 'db';

const initialState = {
    categories: categories
};

const transactionCategories = createSlice({
  name: 'transactionCategories',
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.payload;
    },
   
  },
});

export const transactionCategoriesReducer = transactionCategories.reducer;
