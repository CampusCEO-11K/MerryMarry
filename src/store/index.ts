import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import tickets from './tickets';
import guestbookWorkflow from './guestbook-workflow';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  tickets: tickets.reducer,
  guestbookWorkflow: guestbookWorkflow.reducer,
});

export const RootActions = {
  auth: auth.actions,
  tickets: tickets.actions,
  guestbookWorkflow: guestbookWorkflow.actions,
}

export type RootState = ReturnType<typeof rootReducer>;
