import { createAsyncThunk } from '@reduxjs/toolkit';

import { addTransaction } from 'servises/transactionsApi';

export const addTransactionUser = createAsyncThunk(
  'transactions/addTransaction',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    try {
      const transaction = await addTransaction(token);
      return transaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
