import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import * as dummy from './dummy';
import * as guestbook from './guestbook';
import * as payment from './payment';
import * as auth from './auth';
import * as toss from './toss';
import * as ticket from './ticket';

export const rootReducer = combineReducers({
  payment: payment.reducer,
  dummy: dummy.reducer,
  auth: auth.reducer,
  guestbook: guestbook.reducer,
  toss: toss.reducer,
  ticket: ticket.reducer,
});

export const RootActions = {
  payment: payment.actions,
  dummy: dummy.actions,
  guestbook: guestbook.actions,
  toss: toss.actions,
}

export function* rootSaga() {
  yield all([
    ...payment.sagas,
    ...dummy.sagas,
    ...auth.sagas,
    ...guestbook.sagas,
    ...toss.sagas,
    ...ticket.sagas,
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;
