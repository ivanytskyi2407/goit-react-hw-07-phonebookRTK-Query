import { phonebookAPI } from './phonebookAPI';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { [phonebookAPI.reducerPath]: phonebookAPI.reducer },
  middleware: getDefaultMidllware =>
    getDefaultMidllware().concat(phonebookAPI.middleware),
});
