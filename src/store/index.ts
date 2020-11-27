import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import tickets from './tickets';
import guestbooks from './guestbooks';
import guestbookWorkflow from './guestbook-workflow';

export const rootReducer = combineReducers({
  auth: auth.reducer,
  tickets: tickets.reducer,
  guestbookWorkflow: guestbookWorkflow.reducer,
  guestbooks: guestbooks.reducer,
});

export const RootActions = {
  auth: auth.actions,
  tickets: tickets.actions,
  guestbookWorkflow: guestbookWorkflow.actions,
  guestbooks: guestbooks.actions,
}

export type RootState = ReturnType<typeof rootReducer>;
