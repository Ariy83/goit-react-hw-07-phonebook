import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBook/phoneBookSlice';

export const store = configureStore({
  reducer: phoneBookReducer,
});
