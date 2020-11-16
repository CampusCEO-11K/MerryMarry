import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from 'redux-saga/effects';
import { paymentApprove } from '../../api/payment/approve';
import { paymentReady } from '../../api/payment/ready';
import { paymentPolling } from './polling';

const PaymentStatus = {
  ready: '준비 중...',
  polling: '대기 중...',
  approve: '승인 요청 중...',
  done: '완료',
} as const;

interface State {
  status?: typeof PaymentStatus[keyof typeof PaymentStatus];
  error?: string;
  loading: boolean;
}

const initialState: State = {
  loading: false,
}

const paymentRequest = createAction<paymentReady.Params>('payment/request');
const paymentSuccess = createAction<paymentApprove.Result>('payment/success');

// Slices
const slice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<State>) => payload,
    update: (state, { payload }: PayloadAction<Partial<State>>) => ({ ...state, ...payload }),
    reset: () => initialState,
  },
});

export const reducer = slice.reducer;

export const actions = {
  paymentRequest,
  paymentSuccess
}

// Sagas
function* fetch(action: ReturnType<typeof paymentRequest>) {
  try {
    yield put(slice.actions.update({ status: PaymentStatus.ready, loading: true }));

    const readyResult: paymentReady.Result = yield call(paymentReady, { amount: action.payload.amount });
    yield put(slice.actions.update({ status: PaymentStatus.polling }));
    
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    if (isMobile) {
      // window.location.assign(result.next_redirect_mobile_url);
      const win = window.open(readyResult.next_redirect_mobile_url, '_blank');
      win?.focus();
    } else {
      // window.location.assign(result.next_redirect_pc_url);
      const win = window.open(readyResult.next_redirect_pc_url, '_blank');
      win?.focus();
    }

    const tid = readyResult.tid;
    const pg_token: paymentPolling.Result = yield call(paymentPolling);
    yield put(slice.actions.update({ status: PaymentStatus.approve }));

    const approveResult: paymentApprove.Result = yield call(paymentApprove, { pg_token, tid });
    yield put(slice.actions.update({ status: PaymentStatus.done, loading: false }));

    yield put(paymentSuccess(approveResult));
  } catch (error) {
    yield put(slice.actions.update({ error, loading: false }));
  }
}

function* watch() {
  yield takeEvery(paymentRequest.type, fetch);
}

export const sagas = [
  watch(),
];
