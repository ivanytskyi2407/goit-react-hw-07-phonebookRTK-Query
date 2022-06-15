import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './phoneBookOperation';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { entities: [], filter: '', status: null, error: null },
  reducers: {
    filterContacts: (state, { payload }) => {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    //   fetch
    [fetchContacts.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    // remove
    [removeContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: state.entities.filter(({ id }) => {
          return id !== payload.id;
        }),
      };
    },
    [removeContact.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    // add
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: null,
        entities: [...state.entities, payload],
      };
    },
    [addContact.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export default phonebookSlice.reducer;
export const { filterContacts } = phonebookSlice.actions;
