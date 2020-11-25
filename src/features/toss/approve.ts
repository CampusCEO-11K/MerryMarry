import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { tossApprove } from 'src/api';
import { tossApproveSuccess } from './success';

export const tossApproveRequest = createAction<tossApprove.Params>('toss/approve');

function* fetch({ payload }: ReturnType<typeof tossApproveRequest>) {
  const result = yield call(tossApprove, payload);
  yield put(tossApproveSuccess(result));
}

function* watch() {
  yield takeEvery(tossApproveRequest.type, fetch);
}

export const sagas = [
  watch(),
];
