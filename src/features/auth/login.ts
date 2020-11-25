import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authLoginApi } from 'src/api';

export const authLoginRequest = createAction<authLoginApi.Params>('auth/login/request');
export const authLoginSuccess = createAction<authLoginApi.Result>('auth/login/success');
export const authLoginFailure = createAction<string>('auth/login/failure');

// Sagas
function* fetch(action: ReturnType<typeof authLoginRequest>) {
  try {
    const result: authLoginApi.Result = yield call(authLoginApi, action.payload);
    yield put(authLoginSuccess(result));
  } catch (error) {
    yield put(authLoginFailure(error));
  }
}

function* watch() {
  yield takeEvery(authLoginRequest.type, fetch);
}

export const sagas = [
  watch(),
];
