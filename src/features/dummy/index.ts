import { combineReducers } from "@reduxjs/toolkit";
import * as dummy from './dummy';

export const reducer = combineReducers({
  dummy: dummy.reducer,
});

export const actions = {
  dummy: dummy.actions,
}

export const sagas = [
  ...dummy.sagas
];
