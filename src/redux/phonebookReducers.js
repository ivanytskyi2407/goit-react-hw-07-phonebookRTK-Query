import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

export const filter = createReducer('', {
  [actions.filterContacts]: (state, { payload }) => payload,
});
