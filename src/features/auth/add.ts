import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authAddApi } from 'src/api';

export const authAddRequest = createAction<authAddApi.Params>('auth/add/request');
export const authAddSuccess = createAction<authAddApi.Result>('auth/add/success');
export const authAddFailure = createAction<string>('auth/add/failure');

// Sagas
function* fetch(action: ReturnType<typeof authAddRequest>) {
  try {
    const result: authAddApi.Result = yield call(authAddApi, action.payload);
    yield put(authAddSuccess(result));
  } catch (error) {
    yield put(authAddFailure(error));
  }
}

function* watch() {
  yield takeEvery(authAddRequest.type, fetch);
}

export const sagas = [
  watch(),
];
