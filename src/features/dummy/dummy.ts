import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { API_SERVER } from 'src/envs';

type Params = any;

type Result = any;

function request(params: Params): Promise<Result> {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      url: `${API_SERVER}/dummy`,
      method: 'post',
      data: params,
    }

    axios(config)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: string) => {
        reject(err);
      })
  })
}

interface State {
  result?: Result;
  error?: string;
  loading: boolean;
}

const initialState: State = {
  loading: false,
}

// Slices
const slice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    success: (state, { payload }: PayloadAction<Result>) => ({ result: payload, loading: false }),
    failure: (state, { payload }: PayloadAction<string>) => ({ error: payload, loading: false }),
    request: (state, action: PayloadAction<Params>) => ({ loading: true }),
  },
});

export const reducer = slice.reducer;

export const actions = {
  ...slice.actions,
}

// Sagas
function* fetch(action: ReturnType<typeof actions.request>) {
  try {
    const result: Result = yield call(request, action.payload);
    yield put(actions.success(result));
  } catch (error) {
    yield put(actions.failure(error));
  }
}

function* watch() {
  yield takeEvery(actions.request.type, fetch);
}

export const sagas = [
  watch(),
];
