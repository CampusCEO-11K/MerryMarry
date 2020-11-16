import { createAction } from '@reduxjs/toolkit';
import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { RootState } from 'src/features';
import { authLoginSuccess } from 'src/features/auth';
import { GuestbookWorflowStep, slice } from '.';
import { paymentRequest, paymentSuccess } from 'src/features/payment';
import { guestbookWorkflowApi } from 'src/api';

export const guestbookWorkflowPayment = createAction<number | undefined>('guestbook/workflow/payment');
export const guestbookWorkflowLoginSkip = createAction<undefined>('guestbook/workflow/login-skip');

function* fetch(action: ReturnType<typeof guestbookWorkflowPayment>) {
  const amount = action.payload;

  const userId = yield select((state: RootState) => state.auth.userId);
  if (!userId) {
    yield put(slice.actions.update({ amount, step: GuestbookWorflowStep.login }));
    yield take([guestbookWorkflowLoginSkip.type, authLoginSuccess.type]);
  }

  if (amount) {
    yield put(paymentRequest({ amount }));
    yield take(paymentSuccess.type);
  }

  const userId2 = yield select((state: RootState) => state.auth.userId);
  const workflow = yield select((state: RootState) => state.guestbook.workflow);
  const params = {
    marriageId: workflow.marriage?.marriageId,
    personId: workflow.person?.personId,
    userId: userId2,
    guestbook: workflow.guestbook,
    isOnline: workflow.isOnline,
    amount
  }
  
  const result: guestbookWorkflowApi.Result = yield call(guestbookWorkflowApi, params);
  console.log(result);

  yield put(slice.actions.update({ step: GuestbookWorflowStep.success }));
}

// Sagas
function* watch() {
  yield takeEvery(guestbookWorkflowPayment.type, fetch);
}

export const sagas = [
  watch()
]
