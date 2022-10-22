import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllTransactionsForPeriod } from 'servises/transactionsApi';

const getCategoriesSummaryMock = {
  categoriesSummary: [
    {
      name: 'Main expenses',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Products',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Car',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Self care',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Child care',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Household products',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Education',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Leisure',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Other expenses',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Entertainment',
      type: 'EXPENSE',
      total: 10,
    },
    {
      name: 'Income',
      type: 'INCOME',
      total: 10,
    },
  ],
  incomeSummary: 0,
  expenseSummary: 0,
  periodtotal: 10,
  year: 0,
  month: 0,
};

export const getAllTransactionsForPeriodUser = createAsyncThunk(
  'transactionsSummary/getAllTransactionsForPeriodUser',
  async ({ month, year }, thunkApi) => {
    try {
      const { data } = await getAllTransactionsForPeriod(month, year);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
