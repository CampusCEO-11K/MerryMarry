import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import * as payment from './payment';
import * as dummy from './dummy';
import * as guestbook from './guestbook';

const rootReducer = combineReducers({
  payment: payment.reducer,
  dummy: dummy.reducer,
  guestbook: guestbook.reducer,
});

export const RootActions = {
  payment: payment.actions,
  dummy: dummy.actions,
  guestbook: guestbook.actions,
}

function* rootSaga() {
  yield all([
    ...payment.sagas,
    ...dummy.sagas,
  ]);
}

const reduxString: string | null = localStorage.getItem('redux');
const persistedState = reduxString ? JSON.parse(reduxString) : undefined;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootDispatch = typeof store.dispatch;