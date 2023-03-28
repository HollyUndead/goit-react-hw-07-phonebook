import { configureStore } from '@reduxjs/toolkit';
import contactsFilter from './contacts-slicer';

export const store = configureStore({
  reducer: contactsFilter,
});
