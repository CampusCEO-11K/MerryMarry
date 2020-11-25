import { createAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { listTicketApi } from 'src/api';
import { RootState } from '..';

export const listTicketRequest = createAction<undefined>('ticket/list/request');
export const listTicketSuccess = createAction<listTicketApi.Result>('ticket/list/success');
export const listTicketFailure = createAction<string>('ticket/list/failure');

function* fetch({ payload }: ReturnType<typeof listTicketRequest>) {
  try {
    const userId = yield select((state: RootState) => state.auth.user?.userId);
    const result = yield call(listTicketApi, { userId });
    yield put(listTicketSuccess(result));
  } catch (err) {
    yield put(listTicketFailure(err));
  }
}

function* watch() {
  yield takeEvery(listTicketRequest.type, fetch);
}

export const sagas = [
  watch(),
];
