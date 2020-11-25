import { createSlice } from '@reduxjs/toolkit';
import * as approve from './approve';
import * as ready from './ready';

interface State {
  
}

const initialState: State = {
  
}

// Slices
const slice = createSlice({
  name: 'toss',
  initialState,
  reducers: {
    
  },
});

export const reducer = slice.reducer;

export const actions = {
  ...slice.actions,
}

export const sagas = [
  ...ready.sagas,
  ...approve.sagas,
];
