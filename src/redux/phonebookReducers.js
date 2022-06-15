import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './phonebookActions';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
