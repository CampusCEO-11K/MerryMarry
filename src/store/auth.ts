import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/models';

interface State {
  user?: User;
}

const initialState: State = {
  user: {
    userId: 1,
    username: "username",
    name: "홍길동",
    phone: "01012345678",
    addDate: "2020-11-27T09:41:07.000Z",
    regDate: "2020-11-27T09:41:23.000Z"
  },
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
