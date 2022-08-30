import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630e0f64109c16b9abf3babb.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    // addContact(state, action) {
    //   state.items.push(action.payload);
    // },
    // removeContact(state, action) {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
