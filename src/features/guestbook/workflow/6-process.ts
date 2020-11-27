import { createAction } from '@reduxjs/toolkit';
import { call, getContext, put, select, takeEvery } from 'redux-saga/effects';
import { workflowGuestbookApi } from 'src/api';
import { tossReadyRequest, tossReadySuccess } from 'src/features/payment/toss';
import { User } from 'src/models';
import { RootActions, RootState } from 'src/store';
import { GuestbookWorkflowStoreState, GuestbookWorkflowStoreStep } from 'src/store/guestbook-workflow';
import { getNameFromMarriage } from 'src/utils';
import { guestbook_workflow_success } from 'src/utils/routes';

export const guestbookWorkflowProcess = createAction<undefined>('guestbook/workflow/process');

function* fetchGuestbookWorkflowProcess() {
  yield put(RootActions.guestbookWorkflow.update({ step: GuestbookWorkflowStoreStep.process }));

  const workflow: GuestbookWorkflowStoreState = yield select((state: RootState) => state.guestbookWorkflow);
  const { marriage, amount } = workflow;

  if (amount) {
    const orderName = getNameFromMarriage(marriage!);
    yield put(tossReadyRequest({ amount, orderName }));
  } else {
    yield call(common, undefined);
  }
}

function* fetchTossReadySuccess({ payload }: ReturnType<typeof tossReadySuccess>) {
  const step: GuestbookWorkflowStoreStep = yield select((state: RootState) => state.guestbookWorkflow.step);
  if (step === GuestbookWorkflowStoreStep.process) {
    yield call(common, payload);
  }
}

function* common(toss: workflowGuestbookApi.TossPayload | undefined) {
  const workflow: GuestbookWorkflowStoreState = yield select((state: RootState) => state.guestbookWorkflow);
  const user: User = yield select((state: RootState) => state.auth.user);

  const { userId } = user;
  const { marriage, name, isOnline, belong, msg } = workflow;

  const params: workflowGuestbookApi.Params = {
    marriageId: marriage!.marriageId,
    userId,
    isOnline,
    name,
    belong,
    msg,
    toss,
  }

  yield call(workflowGuestbookApi, params);

  const history = yield getContext('history');
  history.push(guestbook_workflow_success);
}

const sagas = [
  takeEvery(guestbookWorkflowProcess.type, fetchGuestbookWorkflowProcess),
  takeEvery(tossReadySuccess.type, fetchTossReadySuccess),
]

export default sagas;
