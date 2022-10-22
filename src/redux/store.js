import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { themesOptions } from 'components/ThemeWrapper/ThemeWrapper';

import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/sliceAuth';
import { transactionCategoriesReducer } from './transactionCategories/sliceTransaction';
import { transactionsControllersReducer } from './transactionsController/trControllerSlice';
import { transactionsSummaryReducer } from './transactionSummaryController/trSummarySlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  theme: (state = themesOptions.LIGHT) => state,
  transactionCategories: transactionCategoriesReducer,
  transactionsControllers: transactionsControllersReducer,
  transactionsSummary: transactionsSummaryReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
