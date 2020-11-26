import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authLoginApi } from 'src/api';
import { RootActions } from 'src/store';
import { guestbookWorkflowProcess } from './6-process';

export const guestbookWorkflowLoginSkip = createAction<undefined>('guestbook/workflow/login-skip');
export const guestbookWorkflowLoginRequest = createAction<authLoginApi.Params>('guestbook/workflow/login-request');

function* fetchLoginSkip() {
  yield put(guestbookWorkflowProcess());
}

function* fetchLoginRequest({ payload }: ReturnType<typeof guestbookWorkflowLoginRequest>) {
  const result: authLoginApi.Result = yield call(authLoginApi, payload);
  yield put(RootActions.auth.set({ user: result }));
  yield put(guestbookWorkflowProcess());
}

export default [
  takeEvery(guestbookWorkflowLoginSkip.type, fetchLoginSkip),
  takeEvery(guestbookWorkflowLoginRequest.type, fetchLoginRequest),
]