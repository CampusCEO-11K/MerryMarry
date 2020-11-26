import { createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { RootActions } from 'src/store';
import { GuestbookWorkflowStoreStep } from 'src/store/guestbook-workflow';

interface guestbookWorkflowGuestbookPayload {
  name: string;
  belong?: string;
  msg?: string;
}

export const guestbookWorkflowGuestbook = createAction<guestbookWorkflowGuestbookPayload>('guestbook/workflow/guestbook');

function* fetch({ payload }: ReturnType<typeof guestbookWorkflowGuestbook>) {
  yield put(RootActions.guestbookWorkflow.update({ ...payload, step: GuestbookWorkflowStoreStep.payment }));
}

export default [
  takeEvery(guestbookWorkflowGuestbook.type, fetch)
]