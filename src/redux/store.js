import { phonebookAPI } from './phonebookAPI';
import { configureStore } from '@reduxjs/toolkit';
import { filter } from './phonebookReducers';

export const store = configureStore({
  reducer: {
    [phonebookAPI.reducerPath]: phonebookAPI.reducer,
    filter,
  },
  middleware: getDefaultMidllware =>
    getDefaultMidllware().concat(phonebookAPI.middleware),
});
