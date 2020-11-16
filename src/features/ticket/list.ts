import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { listTicketApi } from 'src/api';
import { Ticket } from 'src/models';

const initialState: Ticket[] = []

// Slices
const slice = createSlice({
  name: 'ticket/list',
  initialState,
  reducers: {
    request: (state, action: PayloadAction<undefined>) => state,
    success: (_, action: PayloadAction<Ticket[]>) => action.payload,
  },
});

export const reducer = slice.reducer;

// actions
export const actions = {
  ...slice.actions,
}

// Sagas
function* fetch(action: ReturnType<typeof actions.request>) {
  try {
    const result: listTicketApi.Result = yield call(listTicketApi);
    yield put(actions.success(result));
  } catch (error) {

  }
}

function* watch() {
  yield takeEvery(actions.request.type, fetch);
}

export const sagas = [
  watch(),
];
