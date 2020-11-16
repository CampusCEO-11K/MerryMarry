import { createAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';
import { RootState } from 'src/features';
import { GuestbookWorflowStep, slice } from '.';

export const guestbookWorkflowBack = createAction<undefined>('guestbook/workflow/back');

// Sagas
function* fetch() {
  const step = yield select((state: RootState) => state.guestbook.workflow.step);
  console.log('step', step);
  switch (step) {
    case GuestbookWorflowStep.guestbook: {
      yield put(slice.actions.update({ step: GuestbookWorflowStep.entry }));
      break;
    }
    case GuestbookWorflowStep.payment: {
      yield put(slice.actions.update({ step: GuestbookWorflowStep.guestbook }));
      break;
    }
    case GuestbookWorflowStep.login: {
      yield put(slice.actions.update({ step: GuestbookWorflowStep.payment }));
      break;
    }
  }
}

function* watch() {
  yield takeEvery(guestbookWorkflowBack.type, fetch);
}

export const sagas = [
  watch()
]
