import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from 'redux-saga/effects';
import { kakaoApproveApi, kakaoReadyApi } from "src/api";

export const paymentKakaoRequest = createAction<kakaoReadyApi.Params>('payment/kakao/request');
export const paymentKakaoSuccess = createAction<kakaoApproveApi.Result>('payment/kakao/success');
export const paymentKakaoFailure = createAction<string>('payment/kakao/failure');

type Status = 'success' | 'failure' | 'cancel' | 'no_token';

function paymentPolling(): Promise<string> {
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const status = localStorage.getItem('payment_status') as Status | null;

      if (!status) {
        return;
      }

      if (status === 'success') {
        const pgToken = localStorage.getItem('payment_pg_token') as string | null;
        if (pgToken) {
          resolve(pgToken);
        } else {
          reject('no_token');
        }
      } else {
        reject(status);
      }

      localStorage.removeItem('payment_status');
      localStorage.removeItem('payment_pg_token');
      clearInterval(timer);
    }, 100);
  })
}

function* fetch(action: ReturnType<typeof paymentKakaoRequest>) {
  try {
    const readyResult: kakaoReadyApi.Result = yield call(kakaoReadyApi, action.payload);

    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    const win = (isMobile)
      ? window.open(readyResult.next_redirect_mobile_url, '_blank')
      : window.open(readyResult.next_redirect_pc_url, '_blank');
    win?.focus();

    const tid = readyResult.tid;
    const pgToken: string = yield call(paymentPolling);
    const approveResult: kakaoApproveApi.Result = yield call(kakaoApproveApi, { pgToken, tid });

    yield put(paymentKakaoSuccess(approveResult));
  } catch (error) {
    yield put(paymentKakaoFailure(error))
  }
}

export default [
  takeEvery(paymentKakaoRequest.type, fetch)
];
