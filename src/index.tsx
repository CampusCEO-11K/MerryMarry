import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { rootReducer, rootSaga } from './features';
import './index.scss';
import reportWebVitals from './reportWebVitals';

export const customHistory = createBrowserHistory();

const reduxString: string | null = localStorage.getItem('auth');
const persistedState = reduxString ? JSON.parse(reduxString) : undefined;

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

export const store = createStore(
  rootReducer,
  { auth: persistedState },
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage.setItem('auth', JSON.stringify(store.getState().auth));
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
