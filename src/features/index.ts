import { all } from 'redux-saga/effects';
import auth from './auth';
import guestbook from './guestbook';
import payment from './payment';
import marriage from './marriage';
import ticket from './ticket';

export function* rootSaga() {
  yield all([
    ...auth,
    ...guestbook,
    ...marriage,
    ...payment,
    ...ticket,
  ]);
}
