import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getMarriageApi } from 'src/api';
import { GuestbookWorkflowQuery } from 'src/utils/routes';
import { slice } from '.';

export const guestbookWorkflowInit = createAction<GuestbookWorkflowQuery>('guestbook/workflow/init');

// Sagas
function* fetch({ payload }: ReturnType<typeof guestbookWorkflowInit>) {
  const { marriageId, isOnline } = payload;

  const marriage: getMarriageApi.Result = yield call(getMarriageApi, { marriageId });
  yield put(slice.actions.clear());
  yield put(slice.actions.update({ marriage, isOnline }));
}

function* watch() {
  yield takeEvery(guestbookWorkflowInit.type, fetch);
}

export const sagas = [
  watch()
]