import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Marriage } from 'src/models';

export enum GuestbookWorkflowStoreStep {
  entry,
  guestbook,
  payment,
  login,
  process,
  success,
}

export interface GuestbookWorkflowStoreState {
  step: GuestbookWorkflowStoreStep;
  marriage?: Marriage;
  isOnline: boolean;
  name: string;
  belong: string;
  msg: string;
  amount: number;
}

const initialState: GuestbookWorkflowStoreState = {
  amount: 0,
  name: '',
  belong: '',
  msg: '',
  step: GuestbookWorkflowStoreStep.entry,
  isOnline: true,
}

// Slices
export default createSlice({
  name: 'guestbook/workflow',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<GuestbookWorkflowStoreState>) => payload,
    update: (state, { payload }: PayloadAction<Partial<GuestbookWorkflowStoreState>>) => ({ ...state, ...payload }),
    clear: () => initialState,
    back: (state) => {
      switch (state.step) {
        case GuestbookWorkflowStoreStep.guestbook: return { ...state, step: GuestbookWorkflowStoreStep.entry }
        case GuestbookWorkflowStoreStep.payment: return { ...state, step: GuestbookWorkflowStoreStep.guestbook }
        case GuestbookWorkflowStoreStep.login: return { ...state, step: GuestbookWorkflowStoreStep.payment }
      }
    },
  },
});
