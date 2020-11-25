import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authUpdateApi } from 'src/api';

export const authUpdateRequest = createAction<authUpdateApi.Params>('auth/update/request');
export const authUpdateSuccess = createAction<authUpdateApi.Result>('auth/update/success');
export const authUpdateFailure = createAction<string>('auth/update/failure');

// Sagas
function* fetch(action: ReturnType<typeof authUpdateRequest>) {
  try {
    const result: authUpdateApi.Result = yield call(authUpdateApi, action.payload);
    yield put(authUpdateSuccess(result));
  } catch (error) {
    yield put(authUpdateFailure(error));
  }
}

function* watch() {
  yield takeEvery(authUpdateRequest.type, fetch);
}

export const sagas = [
  watch(),
];
