import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { deleteContact, addContact, changeFilter } =
  phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
