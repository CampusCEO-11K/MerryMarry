import { createAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import { RootActions } from 'src/store';
import { GuestbookWorkflowStoreStep } from 'src/store/guestbook-workflow';

export const guestbookWorkflowEntry = createAction<undefined>('guestbook/workflow/entry');

function* fetch() {
  yield put(RootActions.guestbookWorkflow.update({ step: GuestbookWorkflowStoreStep.guestbook }));
}

const sagas = [
  takeEvery(guestbookWorkflowEntry.type, fetch)
]

export default sagas;
