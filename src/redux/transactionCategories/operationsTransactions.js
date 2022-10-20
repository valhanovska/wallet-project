import { createAsyncThunk } from '@reduxjs/toolkit';
import { transactionCategories } from '../../servises/transactionsApi';

export const getCategories = createAsyncThunk(
  'transactionCategories/getCategories',
  async function (_, { rejectWithValue }) {
    try {
      const data = await transactionCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
