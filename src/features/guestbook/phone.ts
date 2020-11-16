import { createAction } from '@reduxjs/toolkit';
import { call, getContext, takeEvery } from 'redux-saga/effects';
import { createPersonApi, findMarriageByPhoneApi, findPersonByPhoneApi } from 'src/api';
import { guestbook_workflow } from 'src/utils/routes';

export const guestbookPhone = createAction<{ phone: string }>('guestbook/phone');

// Sagas
function* fetch({ payload }: ReturnType<typeof guestbookPhone>) {
  const history = yield getContext('history');
  let personId: number;

  try {
    const { marriageId }: findMarriageByPhoneApi.Result = yield call(findMarriageByPhoneApi, { phone: payload.phone });
    history.push(guestbook_workflow({ marriageId, isOnline: true }));
    return;
  } catch (error) {

  }

  try {
    const result: findPersonByPhoneApi.Result = yield call(findPersonByPhoneApi, { phone: payload.phone });
    personId = result.personId;
  } catch (error) {
    const result: createPersonApi.Result = yield call(createPersonApi, { phone: payload.phone, name: '' });
    personId = result.personId;
  }

  history.push(guestbook_workflow({ personId, isOnline: true }));
}

function* watch() {
  yield takeEvery(guestbookPhone.type, fetch);
}

export const sagas = [
  watch(),
];
