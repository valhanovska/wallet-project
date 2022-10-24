import { createSlice } from '@reduxjs/toolkit';
import {
  addTransactionUser,
  editTransactionUser,
  getTransactionUser,
  removeTransactionUser,
} from './trControllerOpertaion';

const transactionsControllers = createSlice({
  name: 'transactionsControllers',
  initialState: {
    transactionsControllers: null,
    isLoading: false,
    error: null,
    allTransactions: [],
    // allFilteredTransaction: [],
    // filterFlag: "",
  },

  reducers: {
    editeNewContact: (state, { payload }) => {
      state.transactionsControllers = payload;
    },
    clearEditeNewContact: (state, { payload })=> {
      state.transactionsControllers = null;
    },
  },
  
  extraReducers: {
    [addTransactionUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransactionUser.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // state.transactionsControllers = action.payload;
    },
    [addTransactionUser.rejected]: state => {
      state.error = null;
    },
    [getTransactionUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getTransactionUser.fulfilled]: (state, action) => {
      state.allTransactions = action.payload.reverse();
    },
    [getTransactionUser.rejected]: state => {
      state.error = null;
    },
    [removeTransactionUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [removeTransactionUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.allTransactions = state.allTransactions.filter(
        allTransactions => allTransactions.id !== action.payload
      );
    },
    [removeTransactionUser.rejected]: state => {
      state.error = null;
    },
    [editTransactionUser.pending]: state => {
      state.transactionsControllers=null;
      state.isLoading = true;
      state.error = null;
    },
    [editTransactionUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    state.transactionsControllers = state.allTransactions.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      },
  
    },
    [editTransactionUser.rejected]: state => {
      state.error = null;
    },
  
});

export const transactionsControllersReducer = transactionsControllers.reducer;
export const { editeNewContact, clearEditeNewContact } = transactionsControllers.actions;
