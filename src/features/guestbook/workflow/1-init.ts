import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getMarriageApi } from 'src/api';
import { RootActions } from 'src/store';

interface GuestbookWorkflowInitPayload {
  marriageId: number;
  isOnline: boolean;
}

export const guestbookWorkflowInit = createAction<GuestbookWorkflowInitPayload>('guestbook/workflow/init');

function* fetch({ payload }: ReturnType<typeof guestbookWorkflowInit>) {
  const { marriageId, isOnline } = payload;
  const marriage: getMarriageApi.Result = yield call(getMarriageApi, { marriageId });
  yield put(RootActions.guestbookWorkflow.clear());
  yield put(RootActions.guestbookWorkflow.update({ marriage, isOnline }));
}

const sagas = [
  takeEvery(guestbookWorkflowInit.type, fetch)
]

export default sagas;
