import { createAction } from '@reduxjs/toolkit';
import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { authAddApi, createGuestbookApi } from 'src/api';
import { RootState } from 'src/features';
import { authLoginSuccess } from 'src/features/auth';
import { tossReadyRequest } from 'src/features/toss/ready';
import { tossApproveSuccess } from 'src/features/toss/success';
import { Marriage, Transaction } from 'src/models';
import { GuestbookWorflowStep, slice } from '.';

export const guestbookWorkflowPayment = createAction<number | undefined>('guestbook/workflow/payment');
export const guestbookWorkflowLoginSkip = createAction<undefined>('guestbook/workflow/login-skip');

function* fetch(action: ReturnType<typeof guestbookWorkflowPayment>) {
  const amount = action.payload;

  const userId = yield select((state: RootState) => state.auth.user?.userId);
  if (!userId) {
    yield put(slice.actions.update({ amount, step: GuestbookWorflowStep.login }));
    const action2 = yield take([guestbookWorkflowLoginSkip.type, authLoginSuccess.type]);
    if (action2.type === guestbookWorkflowLoginSkip.type) {
      const name: string = yield select((state: RootState) => state.guestbook.workflow.name);
      const result: authAddApi.Result = yield call(authAddApi, { name });
      yield put(authLoginSuccess(result));
    }
  }

  let transactionId: number | undefined = undefined;
  if (amount) {
    const marriage: Marriage = yield select((state: RootState) => state.guestbook.workflow.marriage);

    const names = [marriage.male.name, marriage.lady.name].filter(v => !!v);
    const orderName = `축의금: ${names.join(', ')}`;

    yield put(tossReadyRequest({ amount, orderName }));
    const transaction: Transaction = (yield take(tossApproveSuccess.type)).payload;
    transactionId = transaction.transactionId;
  }

  const userId2 = yield select((state: RootState) => state.auth.user?.userId);
  console.log('userId2', userId2);
  const workflow = yield select((state: RootState) => state.guestbook.workflow);
  const params = {
    marriageId: workflow.marriage?.marriageId,
    userId: userId2,
    transactionId,
    name: workflow.name,
    belong: workflow.belong,
    msg: workflow.msg,
    isOnline: workflow.isOnline,
  }
  
  yield call(createGuestbookApi, params);

  yield put(slice.actions.update({ step: GuestbookWorflowStep.success }));
}

// Sagas
function* watch() {
  yield takeEvery(guestbookWorkflowPayment.type, fetch);
}

export const sagas = [
  watch()
]
