import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from 'src/models';

export default createSlice({
  name: 'tickets',
  initialState: [] as Ticket[],
  reducers: {
    set: (_, { payload }: PayloadAction<Ticket[]>) => payload,
  },
});
