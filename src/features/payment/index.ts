import { combineReducers } from "@reduxjs/toolkit";
import * as ready from './ready';
import * as approve from './approve';

export const reducer = combineReducers({
  ready: ready.reducer,
  approve: approve.reducer,
});

export const actions = {
  ready: ready.actions,
  approve: approve.actions,
}

export const sagas = [
  ...ready.sagas,
  ...approve.sagas,
];
