import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authAddApi } from 'src/api';
import { RootActions } from 'src/store';

export const authAddRequest = createAction<undefined>('auth/add/request');

function* fetch() {
  try {
    const result: authAddApi.Result = yield call(authAddApi, {});
    yield put(RootActions.auth.set({ user: result }));
  } catch (err) {
    
  }
}

const sagas = [
  takeEvery(authAddRequest.type, fetch),
]

export default sagas;
