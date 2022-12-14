import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addTransaction,
  editTransaction,
  getAllTransactions,
  removeTransaction,
} from 'servises/transactionsApi';

export const addTransactionUser = createAsyncThunk(
  'transactionsControllers/addTransactionUser',
  async (transaction, thunkApi) => {
    try {
      const r = await addTransaction(transaction);

      return r;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactionUser = createAsyncThunk(
  'transactionsControllers/getTransactionUser',
  async (_, thunkApi) => {
    try {
      const r = await getAllTransactions();
      return r;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeTransactionUser = createAsyncThunk(
  'transactionsControllers/removeTransactionUser',
  async (id, thunkApi) => {
    try {
      await removeTransaction(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editTransactionUser = createAsyncThunk(
  'transactionsControllers/editTransactionUser',
  async (data, thunkApi) => {
    try {
      const r = await editTransaction(data.id,{
        "transactionDate": data.transactionDate,
        "type": data.type,
        "categoryId": data.categoryId,
        "comment": data.comment,
        "amount": data.amount,
      });
      return r.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
