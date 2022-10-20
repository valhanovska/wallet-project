import { createAsyncThunk } from '@reduxjs/toolkit';
//import { transactionCategories } from '../../servises/transactionsApi';

export const getCategories = createAsyncThunk(
  'transactionCategories/getCategories',
  async function (_, { rejectWithValue, getState }) {
    try {
      const db = getState().transactionCategories.categories;
      console.log('db', db);
      return db;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
