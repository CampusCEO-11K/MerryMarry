import { createAction } from '@reduxjs/toolkit';
import { call, getContext, takeEvery } from 'redux-saga/effects';
import { getMarriageByPhoneApi } from 'src/api';
import { guestbook_workflow } from 'src/utils/routes';

export const guestbookPhone = createAction<{ phone: string, name: string }>('guestbook/phone');

// Sagas
function* fetch({ payload }: ReturnType<typeof guestbookPhone>) {
  try {
    const { marriageId }: getMarriageByPhoneApi.Result = yield call(getMarriageByPhoneApi, payload);

    const history = yield getContext('history');
    history.push(guestbook_workflow({ marriageId, isOnline: true }));
    return;
  } catch (error) {
    alert(error.toString());
  }
}

function* watch() {
  yield takeEvery(guestbookPhone.type, fetch);
}

export const sagas = [
  watch(),
];
