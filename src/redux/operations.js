import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63a97f77594f75dc1db766fe.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (object) => {
  const response = await axios.post('/contacts', object);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.id;
});

