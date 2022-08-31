import { configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactsApi } from './contactsSlice';

console.log(filterSlice);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// >>>>>>>>>>>>>>>>>>>> Варіант на createAction та createReducer <<<<<<<<<<<<<<<<<<<<<<<<<<

// export const addContact = createAction('contacts/addContact');
// export const removeContact = createAction('contacts/removeContact');
// export const filterContacts = createAction('filter/filterContacts');

// const filterReducer = createReducer('', {
//   [filterContacts]: (state, action) => {
//     return action.payload;
//   },
// });

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [removeContact]: (state, action) => {
//     return state.filter(item => item.id !== action.payload);
//   },
// });
