import { createAction } from '@reduxjs/toolkit';
import { loadTossPayments } from '@tosspayments/sdk';
import { call, takeEvery } from 'redux-saga/effects';
import { TOSS_CLIENT_KEY } from 'src/envs';

interface ActionPayload {
  amount: number;
  orderName: string;
}

interface TossReadyFailurePayload {
  code: string;
  message: string;
}

export const tossReadyRequest = createAction<ActionPayload>('toss/ready');
export const tossReadyFailure = createAction<TossReadyFailurePayload>('toss/ready/failure');

function* fetch({ payload }: ReturnType<typeof tossReadyRequest>) {
  const { amount, orderName } = payload;

  const tossPayments = yield call(loadTossPayments, TOSS_CLIENT_KEY);

  tossPayments.requestPayment('카드', {
    amount,
    orderName,
    orderId: Date.now().toString(),
    successUrl: window.location.origin + '/toss/ready-result?status=success',
    failUrl: window.location.origin + '/toss/ready-result?status=failure',
  });
}

function* watch() {
  yield takeEvery(tossReadyRequest.type, fetch);
}

export const sagas = [
  watch(),
];
