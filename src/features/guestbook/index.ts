import { combineReducers } from "@reduxjs/toolkit";
import * as qrcode from './qrcode';

export const reducer = combineReducers({
  qrcode: qrcode.reducer,
});

export const actions = {
  qrcode: qrcode.actions,
}
