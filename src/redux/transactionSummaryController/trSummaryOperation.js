import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllTransactionsForPeriod } from 'servises/transactionsApi';

export const getAllTransactionsForPeriodUser = createAsyncThunk(
  'transactionsSummary/getAllTransactionsForPeriodUser',
  async ({ month, year }, thunkApi) => {
    try {
      const {data} = await getAllTransactionsForPeriod(month, year);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
