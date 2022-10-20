import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTransactions = async () => {
  const r = await axios.get('api/transactions');
  return r.data;
};
