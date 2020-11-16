import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, getContext, put, select, take, takeEvery } from 'redux-saga/effects';
import { createGuestbookApi, getMarriageApi, getPersonApi } from 'src/api';
import { Guestbook, Marriage, Person } from 'src/models';
import { RootActions, RootState } from '..';

interface State {
  step: 'entry' | 'guestbook' | 'payment' | 'login' | 'success';
  marriage?: Marriage;
  person?: Person;
  guestbook?: Guestbook;
  payment?: number;
  userId?: number;
}

const initialState: State = {
  step: 'entry',
}

// Slices
const slice = createSlice({
  name: 'marriage',
  initialState,
  reducers: {
    set: (_, { payload }: PayloadAction<State>) => (payload),
    update: (state, { payload }: PayloadAction<Partial<State>>) => ({ ...state, ...payload }),
    clear: () => (initialState),
  },
});

export const reducer = slice.reducer;

// Actions
const marriageInit = createAction<{ marriageId?: number, personId?: number }>('marriage/init');
const marriageEntry = createAction<undefined>('marriage/entry');
const marriageWrite = createAction<Guestbook | undefined>('marriage/write');
const marriagePayment = createAction<number | undefined>('marriage/payment');
const marriageLoginSkip = createAction<undefined>('marriage/login-skip');
const marriageStepback = createAction<undefined>('marriage/step-back');

export const actions = {
  marriageInit,
  marriageEntry,
  marriageWrite,
  marriagePayment,
  marriageLoginSkip,
  marriageStepback,
}

// Sagas
function* fetch(action: ReturnType<typeof marriageInit>) {
  const history = yield getContext('history');

  if (action.payload.marriageId) {
    const marriage: Marriage = yield call(getMarriageApi, { marriageId: action.payload.marriageId });
    yield put(slice.actions.update({ marriage }));
  } else if (action.payload.personId) {
    const person: Person = yield call(getPersonApi, { personId: action.payload.personId });
    yield put(slice.actions.update({ person }));
  } else {
    alert('error code 808800');
    history.push('/');
  }

  while(true) {
    const action = yield take((action: any) => (action.type as string).startsWith('marriage/'));

    console.log('action.type', action.type, marriageEntry.type);
    switch(action.type) {
      case marriageStepback.type: {
        const arr = ['entry', 'guestbook', 'payment', 'login', 'success'];
        const step = yield select((state: RootState) => state.marriage.step);
        const index = arr.indexOf(step);

        if (index > 0) {
          const newStep = arr[index - 1] as 'entry' | 'guestbook' | 'payment' | 'login' | 'success';
          yield put(slice.actions.update({ step: newStep }));
        }
        break;
      }
      case marriageEntry.type: {
        yield put(slice.actions.update({ step: 'guestbook' }));
        break;
      }
      case marriageWrite.type: {
        const { payload }: ReturnType<typeof marriageWrite> = action;
        yield put(slice.actions.update({ step: 'payment', guestbook: payload }));
        break;
      }
      case marriagePayment.type: {
        const { payload }: ReturnType<typeof marriagePayment> = action;
        yield put(slice.actions.update({ step: 'login', payment: payload }));
        break;
      }
      case marriageLoginSkip.type:
      case RootActions.auth.authLoginSuccess.type: {

        const amount: number | undefined = yield select((state: RootState) => state.marriage.payment);
        if (amount) {
          yield put(RootActions.payment.paymentRequest({ amount }));
        }

        const marriage: Marriage | undefined = yield select((state: RootState) => state.marriage.marriage);
        const guestbook: Guestbook | undefined = yield select((state: RootState) => state.marriage.guestbook);
        const userId: number | undefined = yield select((state: RootState) => state.auth.userId);
        if (marriage && guestbook) {
          yield call(createGuestbookApi, {
            userId,
            marriageId: marriage.marriageId,
            ...guestbook,
          })
        }

        yield put(slice.actions.update({ step: 'success' }));
        break;
      }
    }
  
    const step = yield select((state: RootState) => state.marriage.step);
    if (step === 'success') {
      break;
    }
  }  
}

function* watch() {
  yield takeEvery(marriageInit.type, fetch);
}

export const sagas = [
  watch(),
];
