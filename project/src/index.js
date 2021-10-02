import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middleware';

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH),
  ),
);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect)),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
