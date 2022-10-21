import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionUser,
  getTransactionUser,
} from './trControllerOpertaion';
const transactionsControllers = createSlice({
  name: 'transactionsControllers',
  initialState: {
    transactionsControllers: {
      id: '',
      transactionDate: '',
      type: '',
      categoryId: '',
      userId: '',
      comment: '',
      amount: null,
    },
    isLoading: false,
    error: null,
    allTransactions: [],
  },
  extraReducers: {
    [addTransactionUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransactionUser.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      state.isLoading = true;
      state.error = null;
      state.transactionsControllers = action.payload;
    },
    [getTransactionUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getTransactionUser.fulfilled]: (state, action) => {
      state.allTransactions = action.payload;
    },
  },
});

export const transactionsControllersReducer = transactionsControllers.reducer;
