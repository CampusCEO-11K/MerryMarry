import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import * as dummy from './dummy';
import * as marriage from './marriage';
import * as payment from './payment';
import * as auth from './auth';
import * as loading from './etc/loading';

export const rootReducer = combineReducers({
  payment: payment.reducer,
  dummy: dummy.reducer,
  auth: auth.reducer,
  loading: loading.reducer,
  marriage: marriage.reducer,
});

export const RootActions = {
  payment: payment.actions,
  dummy: dummy.actions,
  marriage: marriage.actions,
  auth: auth.actions,
  loading: loading.actions,
}

export function* rootSaga() {
  yield all([
    ...payment.sagas,
    ...dummy.sagas,
    ...marriage.sagas,
    ...auth.sagas,
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;

// export type RootDispatch = typeof store.dispatch;