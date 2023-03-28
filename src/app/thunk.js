import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64234eec001cb9fc203cd680.mockapi.io/contacts';

// const fetch = axios.create({
//   baseURL: 'https://64234eec001cb9fc203cd680.mockapi.io',
// });

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  '/contacts/postContact',
  async (contactObject, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactObject);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  './contacts/deletContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`./contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
