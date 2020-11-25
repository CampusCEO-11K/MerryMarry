import { createSlice } from '@reduxjs/toolkit';
import { Ticket } from 'src/models';
import * as listTicket from './list-ticket';

// Slices
const slice = createSlice({
  name: 'ticket',
  initialState: [] as Ticket[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listTicket.listTicketSuccess, (state, action) => {
      return action.payload;
    });
  },
});

export const reducer = slice.reducer;

export const sagas = [
  ...listTicket.sagas
];
