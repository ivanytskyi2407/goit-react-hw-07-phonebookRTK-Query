import { contactsAPI, createContact, deleteContact } from '../contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await createContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
