import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/models';

interface State {
  user?: User;
}

const initialState: State = {
  user: undefined,
}

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<State>) => payload,
    update: (state, { payload }: PayloadAction<Partial<State>>) => ({ ...state, ...payload }),
    clear: () => initialState,
  },
});
