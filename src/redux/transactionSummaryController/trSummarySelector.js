import { createSlice } from '@reduxjs/toolkit';

import { getAllTransactionsForPeriodUser } from './trSummaryOperation';

const transactionsSummary = createSlice({
  name: 'transactionsSummary',
  intialState: {
    transactionsForPeriod: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllTransactionsForPeriodUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllTransactionsForPeriodUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.transactionsForPeriod.push(action.payload);
    },
    [getAllTransactionsForPeriodUser.rejected]: state => {
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const transactionsSummaryReducer = transactionsSummary.reducer;
