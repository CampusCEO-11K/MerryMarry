import * as marriage from './marriage';
import * as marriagePhone from './marriage-phone';

export const reducer = marriage.reducer;

export const actions = {
  ...marriage.actions,
  ...marriagePhone.actions,
}

export const sagas = [
  ...marriage.sagas,
  ...marriagePhone.sagas,
];
