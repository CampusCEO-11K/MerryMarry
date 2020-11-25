import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/models';
import * as login from './login';
import * as add from './add';
import * as update from './update';

interface State {
  user?: User;
}

const initialState: State = {
  user: undefined,
}

// Slices
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.authLoginSuccess, (_, { payload }) => ({ user: payload }))
      .addCase(add.authAddSuccess, (_, { payload }) => ({ user: payload }))
      .addCase(update.authUpdateSuccess, (_, { payload }) => ({ user: payload }))
  },
});

export const reducer = slice.reducer;

export const sagas = [
  ...login.sagas,
  ...add.sagas,
  ...update.sagas,
];
