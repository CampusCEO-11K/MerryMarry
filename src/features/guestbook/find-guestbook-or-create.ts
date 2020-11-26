import { createAction } from '@reduxjs/toolkit';
import { call, getContext, takeEvery } from 'redux-saga/effects';
import { findMarriageOrcreateApi } from 'src/api';
import { guestbook_workflow } from 'src/utils/routes';

export const findGuestbookByPhone = createAction<findMarriageOrcreateApi.Params>('guestbook/find-guestbook-or-create');

// Sagas
function* fetch({ payload }: ReturnType<typeof findGuestbookByPhone>) {
  try {
    const { marriageId }: findMarriageOrcreateApi.Result = yield call(findMarriageOrcreateApi, payload);
    const history = yield getContext('history');
    history.push(guestbook_workflow({ marriageId, isOnline: true }));
  } catch (error) {
    alert(error.toString());
  }
}

export default [
  takeEvery(findGuestbookByPhone.type, fetch)
];
