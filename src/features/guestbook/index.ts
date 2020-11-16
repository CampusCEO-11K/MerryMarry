import { combineReducers } from '@reduxjs/toolkit';
import * as workflow from './workflow';
import * as phone from './phone';

export const reducer = combineReducers({
  workflow: workflow.slice.reducer,
});

export const actions = {
  ...workflow.slice.actions,
}

export const sagas = [
  ...workflow.sagas,
  ...phone.sagas,
];
