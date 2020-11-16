import { createAction } from '@reduxjs/toolkit';
import { call, getContext, put, takeEvery } from 'redux-saga/effects';
import { getMarriageApi, getPersonApi } from 'src/api';
import { GuestbookWorkflowQuery } from 'src/utils/routes';
import { slice } from '.';

export const guestbookWorkflowInit = createAction<GuestbookWorkflowQuery>('guestbook/workflow/init');

// Sagas
function* fetch({ payload }: ReturnType<typeof guestbookWorkflowInit>) {
  const history = yield getContext('history');
  const { isOnline } = payload;
  if (isOnline === undefined) {
    history.push('/');
    alert('Error Code 721756');
    return;
  }

  if (payload.marriageId) {
    const marriage: getMarriageApi.Result = yield call(getMarriageApi, { marriageId: payload.marriageId });
    yield put(slice.actions.clear());
    yield put(slice.actions.update({ marriage, isOnline }));
  } else if (payload.personId) {
    const person: getPersonApi.Result = yield call(getPersonApi, { personId: payload.personId });
    yield put(slice.actions.clear());
    yield put(slice.actions.update({ person, isOnline }));
  }
}

function* watch() {
  yield takeEvery(guestbookWorkflowInit.type, fetch);
}

export const sagas = [
  watch()
]