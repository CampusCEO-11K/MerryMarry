import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Marriage } from 'src/models';
import * as init from './init';
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
  name?: string;
  belong?: string;
  msg?: string;
  amount?: number;
  isOnline: boolean;
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
    back: (state) => {
      switch (state.step) {
        case GuestbookWorflowStep.guestbook: return { ...state, step: GuestbookWorflowStep.entry }
        case GuestbookWorflowStep.payment: return { ...state, step: GuestbookWorflowStep.guestbook }
        case GuestbookWorflowStep.login: return { ...state, step: GuestbookWorflowStep.payment }
      }
    },
    entry: (state) => {
      return { ...state, step: GuestbookWorflowStep.guestbook }
    },
    guestbook: (state, { payload }: PayloadAction<{ name: string; belong?: string; msg?: string; }>) => {
      const { name, belong, msg } = payload;
      return { ...state, name, belong, msg, step: GuestbookWorflowStep.payment };
    }
  },
});

export const sagas = [
  ...init.sagas,
  ...payment.sagas,
];
