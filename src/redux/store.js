import phonebookSlice from './phonebookSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: phonebookSlice },
});
