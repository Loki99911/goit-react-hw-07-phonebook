import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import {fetchContacts,addContact,deleteContact} from "./operations"


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   fetchContacts:()=>{},
// ____________________________________________________________ИСПРАВИТЬ PHONE в БэкЭнде_______________________________________________________
  //   addContact: (state, action) => {
  //     const { name, number } = action.payload;
  //     if (state.find(contact => contact.name === name)) {
  //       return alert(`${name} is already in contacts!`);
  //     }
  //     const contact = { id: nanoid(), name, number };
  //     state.push(contact);
  //   },

  //   deleteContact: (state, action) => {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { fetchContacts, addContact, deleteContact } = contactsSlice.actions;
