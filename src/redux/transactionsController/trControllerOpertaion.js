import { createAsyncThunk } from '@reduxjs/toolkit';

import { addTransaction } from 'servises/transactionsApi';

export const addTransactionUser = createAsyncThunk(
  'transactionsControllers/addTransactionUser',
  async (transaction, thunkApi) => {
    try {
      const r = await addTransaction(transaction);
      return r.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
