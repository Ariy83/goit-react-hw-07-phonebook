import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'slice',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
