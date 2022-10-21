import { createSlice } from '@reduxjs/toolkit';

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
  },
  extraReducers: {},
});

export const transactionsControllersReducer = transactionsControllers.reducer;
