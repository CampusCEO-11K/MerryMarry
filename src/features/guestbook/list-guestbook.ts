import { createAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { listGuestbookApi } from 'src/api';
import { RootActions, RootState } from 'src/store';

export const listGuestbookRequest = createAction<undefined>('guestbook/list/request');

function* fetch() {
  try {
    const userId = yield select((state: RootState) => state.auth.user?.userId);
    const result = yield call(listGuestbookApi, { userId });
    yield put(RootActions.guestbooks.set(result));
  } catch (err) {
    
  }
}

export default [
  takeEvery(listGuestbookRequest.type, fetch),
];
