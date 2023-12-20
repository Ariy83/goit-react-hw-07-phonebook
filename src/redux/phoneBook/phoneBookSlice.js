import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'slice',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      });
  },

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    // deleteContact: (state, { payload }) => {
    //   state.contacts = state.contacts.filter(contact => contact.id !== payload);
    // },
    // addContact: (state, { payload }) => {
    //   state.contacts.push(payload);
    // },
  },
});

export const { changeFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
