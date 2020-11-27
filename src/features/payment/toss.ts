import { createAction } from '@reduxjs/toolkit';
import { loadTossPayments } from '@tosspayments/sdk';
import { call, takeEvery } from 'redux-saga/effects';
import { TOSS_CLIENT_KEY } from 'src/envs';

interface TossReadyRequestPayload {
  amount: number;
  orderName: string;
}

interface TossReadySuccessPayload {
  paymentKey: string;
  orderId: string;
  amount: number;
}

interface TossReadyFailurePayload {
  code: string;
  message: string;
}

export const tossReadyRequest = createAction<TossReadyRequestPayload>('toss/ready/request');
export const tossReadySuccess = createAction<TossReadySuccessPayload>('toss/ready/success')
export const tossReadyFailure = createAction<TossReadyFailurePayload>('toss/ready/failure');

function* fetch({ payload }: ReturnType<typeof tossReadyRequest>) {
  const { amount, orderName } = payload;

  const tossPayments = yield call(loadTossPayments, TOSS_CLIENT_KEY);

  tossPayments.requestPayment('카드', {
    amount,
    orderName,
    orderId: 'a' + Date.now().toString(),
    successUrl: window.location.origin + `/toss/ready-result?status=success`,
    failUrl: window.location.origin + `/toss/ready-result?status=failure`,
  });
}

const sagas = [
  takeEvery(tossReadyRequest.type, fetch),
]

export default sagas;
