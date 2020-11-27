import { createAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';
import { RootActions, RootState } from 'src/store';
import { GuestbookWorkflowStoreStep } from 'src/store/guestbook-workflow';
import { guestbookWorkflowProcess } from './6-process';

interface GuestbookWorkflowPaymentPayload {
  amount?: number;
}

export const guestbookWorkflowPayment = createAction<GuestbookWorkflowPaymentPayload>('guestbook/workflow/payment');

function* fetch({ payload }: ReturnType<typeof guestbookWorkflowPayment>) {
  const regDate = yield select((state: RootState) => state.auth.user?.regDate);
  if (regDate) {
    yield put(RootActions.guestbookWorkflow.update({ amount: payload.amount }));
    yield put(guestbookWorkflowProcess());
  } else {
    yield put(RootActions.guestbookWorkflow.update({ amount: payload.amount, step: GuestbookWorkflowStoreStep.login }));
  }
}

const sagas = [
  takeEvery(guestbookWorkflowPayment.type, fetch)
]

export default sagas;
