import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllTransactionsForPeriod } from 'servises/transactionsApi';

export const getAllTransactionsForPeriodUser = createAsyncThunk(
  'transactionsSummary/getAllTransactionsForPeriodUser',
  async ({ month, year }, thunkApi) => {
    try {
      const r = await getAllTransactionsForPeriod(month, year);
      return r;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
