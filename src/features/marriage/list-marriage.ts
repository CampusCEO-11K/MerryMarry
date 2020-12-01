import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { listMarriageApi } from 'src/api';
import { RootActions } from 'src/store';

export const listMarriageRequest = createAction<undefined>('marriage/list/request');

function* fetch() {
  try {
    const result = yield call(listMarriageApi, {});
    yield put(RootActions.marriages.set(result));
  } catch (err) {
    
  }
}

const sagas = [
  takeEvery(listMarriageRequest.type, fetch),
];

export default sagas;
