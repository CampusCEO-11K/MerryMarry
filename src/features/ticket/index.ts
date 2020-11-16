import { combineReducers } from '@reduxjs/toolkit';
import * as list from './list';

export const reducer = combineReducers({
  ticket: list.reducer,
});

export const actions = {
  ...list.actions,
}

export const sagas = [
  ...list.sagas,
];
