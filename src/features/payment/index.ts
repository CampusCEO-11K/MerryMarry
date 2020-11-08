import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { call, getContext, put, takeEvery } from 'redux-saga/effects';
import { paymentApprove } from './approve';
import { paymentPolling } from './polling';
import { paymentReady } from './ready';

interface PaymentParams {
  amount: number;
  redirect: string;
}

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

const paymentRequest = createAction<PaymentParams>('payment/request');

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
}

// Sagas
function* fetch(action: ReturnType<typeof paymentRequest>) {
  try {
    yield put(slice.actions.update({ status: PaymentStatus.ready, loading: true }));

    const readyResult: paymentReady.Result = yield call(paymentReady, { amount: action.payload.amount });
    yield put(slice.actions.update({ status: PaymentStatus.polling }));
    
    // window.location.assign(result.next_redirect_mobile_url);
    const win = window.open(readyResult.next_redirect_mobile_url, '_blank');
    win?.focus();

    const tid = readyResult.tid;
    const pg_token: paymentPolling.Result = yield call(paymentPolling);
    yield put(slice.actions.update({ status: PaymentStatus.approve }));

    yield call(paymentApprove, { pg_token, tid });
    yield put(slice.actions.update({ status: PaymentStatus.done, loading: false }));

    const history = yield getContext('history');
    history.push(action.payload.redirect);
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
