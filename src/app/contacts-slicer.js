import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from './thunk';

export const stateSlice = createSlice({
  name: 'contactsFilter',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        /* eslint-disable-next-line */
        state.contacts.items = state.contacts.items.filter(el => {
          if (el.id !== action.payload.id) {
            return el;
          }
        });
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const { addContacts, setFilter, deleteContacts } = stateSlice.actions;

export default stateSlice.reducer;
