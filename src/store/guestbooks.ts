import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GuestbookForUser } from 'src/models';

export default createSlice({
  name: 'guestbooks',
  initialState: [] as GuestbookForUser[],
  reducers: {
    set: (_, { payload }: PayloadAction<GuestbookForUser[]>) => payload,
  },
});
