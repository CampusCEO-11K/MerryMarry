import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = boolean

const initialState: State = false;

// Slices
const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<State>) => (payload),
  },
});

export const reducer = slice.reducer;

export const actions = {
  ...slice.actions,
}
