import { createAction } from '@reduxjs/toolkit';
import { call, getContext, takeEvery } from 'redux-saga/effects';
import { createPersonApi, findMarriageByPhoneApi, findPersonByPhoneApi } from 'src/api';
import { marriage } from 'src/utils/routes';

const marragePhoneAction = createAction<{
  name: string;
  phone: string;
}>('marriage/phone');

// Sagas
function* fetch({ payload }: ReturnType<typeof marragePhoneAction>) {
  const history = yield getContext('history');
  let personId: number;

  try {
    const result: findMarriageByPhoneApi.Result = yield call(findMarriageByPhoneApi, { phone: payload.phone });
    history.push(marriage + `?marriageId=${result.marriageId}&isOnline=1`);
    return;
  } catch (error) {

  }

  try {
    const result: findPersonByPhoneApi.Result = yield call(findPersonByPhoneApi, { phone: payload.phone });
    personId = result.personId;
  } catch (error) {
    const result: createPersonApi.Result = yield call(createPersonApi, payload);
    personId = result.personId;
  }

  history.push(marriage + `?personId=${personId}&isOnline=1`);
}

function* watch() {
  yield takeEvery(marragePhoneAction.type, fetch);
}

export const actions = {
  marragePhoneAction,
}

export const sagas = [
  watch(),
];
