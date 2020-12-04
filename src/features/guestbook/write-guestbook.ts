import { createAction } from '@reduxjs/toolkit';
import { call, getContext, select, takeEvery } from 'redux-saga/effects';
import { workflowGuestbookApi } from 'src/api';
import { User } from 'src/models';
import { RootState } from 'src/store';
import { guestbook_comment_success } from 'src/utils/routes';

interface WriteGuestbookRequestParams {
  marriageId: number;
  msg: string;
}

export const writeGuestbookRequest = createAction<WriteGuestbookRequestParams>('guestbook/write/request');

function* fetch({ payload }: ReturnType<typeof writeGuestbookRequest>) {
  const { marriageId, msg } = payload;

  const user: User = yield select((state: RootState) => state.auth.user);

  const params: workflowGuestbookApi.Params = {
    marriageId,
    userId: user.userId,
    isOnline: true,
    name: user.name || '',
    belong: '',
    msg,
    toss: undefined,
  }

  yield call(workflowGuestbookApi, params);

  const history = yield getContext('history');
  history.push(guestbook_comment_success);
}

const sagas = [
  takeEvery(writeGuestbookRequest.type, fetch),
];

export default sagas;
