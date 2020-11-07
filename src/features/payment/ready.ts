import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { API_SERVER } from 'src/envs';

type Params = {
  amount: number;
}

type Result = {
  tid: string;
  next_redirect_app_url: string;
  next_redirect_mobile_url: string;
  next_redirect_pc_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;
  created_at: string;
}

function request(params: Params): Promise<Result> {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      url: `${API_SERVER}/payment/ready`,
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
  tid?: string;
  error?: string;
  loading: boolean;
}

const initialState: State = {
  loading: false,
}

// Slices
const slice = createSlice({
  name: 'ready',
  initialState,
  reducers: {
    success: (state, { payload }: PayloadAction<Result>) => ({ tid: payload.tid, loading: false }),
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
    // window.location.assign(result.next_redirect_mobile_url);
    const win = window.open(result.next_redirect_mobile_url, '_blank');
    win?.focus();
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
