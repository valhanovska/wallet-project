import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    transactionCategories
} from '../../servises/transactionsApi';

export const getCategories = createAsyncThunk(
    'transactionCategories/getCategories',
    async function (_, { rejectWithValue, getState}) {
      const token = getState().auth.token;
      try {
        const data = await transactionCategories(token);
        
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );