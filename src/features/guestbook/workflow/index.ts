import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guestbook, Marriage, Person } from 'src/models';

import * as goBack from './go-back';
import * as init from './init';
import * as entry from './entry';
import * as guestbook from './guestbook';
import * as payment from './payment';

export enum GuestbookWorflowStep {
  entry,
  guestbook,
  payment,
  login,
  success,
}

interface State {
  step: GuestbookWorflowStep;
  marriage?: Marriage;
  person?: Person;
  isOnline: boolean;
  guestbook?: Guestbook;
  amount?: number;
}

const initialState: State = {
  step: GuestbookWorflowStep.entry,
  isOnline: true,
}

// Slices
export const slice = createSlice({
  name: 'guestbook/workflow',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<State>) => (payload),
    update: (state, { payload }: PayloadAction<Partial<State>>) => ({ ...state, ...payload }),
    clear: () => (initialState),
  },
});

export const sagas = [
  ...goBack.sagas,
  ...init.sagas,
  ...entry.sagas,
  ...guestbook.sagas,
  ...payment.sagas,
];
