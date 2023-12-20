import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './operations';

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
