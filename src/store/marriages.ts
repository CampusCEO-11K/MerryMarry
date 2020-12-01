import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Marriage } from 'src/models';

export default createSlice({
  name: 'marriages',
  initialState: [] as Marriage[],
  reducers: {
    set: (_, { payload }: PayloadAction<Marriage[]>) => payload,
  },
});
