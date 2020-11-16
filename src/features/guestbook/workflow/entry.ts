import { createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { GuestbookWorflowStep, slice } from '.';

export const guestbookWorkflowEntry = createAction<undefined>('guestbook/workflow/entry');

// Sagas
function* fetch() {
  yield put(slice.actions.update({ step: GuestbookWorflowStep.guestbook }));
}

function* watch() {
  yield takeEvery(guestbookWorkflowEntry.type, fetch);
}

export const sagas = [
  watch()
]
