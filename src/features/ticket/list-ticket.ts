import { createAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { listTicketApi } from 'src/api';
import { RootActions, RootState } from 'src/store';

export const listTicketRequest = createAction<undefined>('ticket/list/request');

function* fetch() {
  try {
    const userId = yield select((state: RootState) => state.auth.user?.userId);
    const result = yield call(listTicketApi, { userId });
    yield put(RootActions.tickets.set(result));
  } catch (err) {
    
  }
}

export default [
  takeEvery(listTicketRequest.type, fetch),
];
