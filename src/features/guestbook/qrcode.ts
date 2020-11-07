import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  qrcode: string;
}

const initialState: State = {
  qrcode: '',
}

// Slices
const slice = createSlice({
  name: 'qrcode',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<string>) => ({ qrcode: payload }),
    clear: () => initialState,
  },
});

export const reducer = slice.reducer;

export const actions = {
  ...slice.actions,
}
