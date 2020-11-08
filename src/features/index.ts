import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import * as dummy from './dummy';
import * as guestbook from './guestbook';
import * as payment from './payment';

export const rootReducer = combineReducers({
  payment: payment.reducer,
  dummy: dummy.reducer,
  guestbook: guestbook.reducer,
});

export const RootActions = {
  payment: payment.actions,
  dummy: dummy.actions,
  guestbook: guestbook.actions,
}

export function* rootSaga() {
  yield all([
    ...payment.sagas,
    ...dummy.sagas,
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;

// export type RootDispatch = typeof store.dispatch;