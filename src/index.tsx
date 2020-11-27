import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';

import { rootSaga } from './features';
import { rootReducer } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

export const customHistory = createBrowserHistory();

const reduxString: string | null = localStorage.getItem('redux');
const persistedState = reduxString ? JSON.parse(reduxString) : undefined;

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  localStorage.setItem('redux', JSON.stringify(store.getState()));
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
