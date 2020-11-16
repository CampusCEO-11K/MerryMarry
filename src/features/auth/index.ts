import { createAction, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { call, put, takeEvery } from 'redux-saga/effects';
import { authLoginApi } from 'src/api';

interface State {
  userId?: number;
}

const initialState: State = {
  userId: undefined,
}

export const authLoginRequest = createAction<authLoginApi.Params>('auth/login/request');
export const authLoginSuccess = createAction<authLoginApi.Result>('auth/login/success');
export const authLoginFailure = createAction<string>('auth/login/failure');

// Slices
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLoginSuccess, (state, action) => {
      return { ...state, userId: action.payload.userId};
    });
  },
});

export const reducer = slice.reducer;

export const actions = {
  ...slice.actions,
  authLoginRequest,
  authLoginSuccess,
  authLoginFailure
}

// Sagas
function* fetch(action: ReturnType<typeof authLoginRequest>) {
  try {
    const result: authLoginApi.Result = yield call(authLoginApi, action.payload);
    yield put(authLoginSuccess(result));
  } catch (error) {
    message.error(error);
    yield put(authLoginFailure(error));
  }
}

function* watch() {
  yield takeEvery(authLoginRequest.type, fetch);
}

export const sagas = [
  watch(),
];
