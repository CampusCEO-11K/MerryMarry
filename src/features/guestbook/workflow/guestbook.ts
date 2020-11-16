import { createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { Guestbook } from 'src/models';
import { GuestbookWorflowStep, slice } from '.';

export const guestbookWorkflowGuestbook = createAction<Guestbook | undefined>('guestbook/workflow/guestbook');

// Sagas
function* fetch({ payload }: ReturnType<typeof guestbookWorkflowGuestbook>) {
  yield put(slice.actions.update({ guestbook: payload, step: GuestbookWorflowStep.payment }));
}

function* watch() {
  yield takeEvery(guestbookWorkflowGuestbook.type, fetch);
}

export const sagas = [
  watch()
]