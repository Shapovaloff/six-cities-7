import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import rootReducer from './store/root-reducer';
import {
  requireAuthorization,
  setDataError,
  setIsAuthorizationError,
  setIsFavoritesError,
  setIsOffline,
  setIsReviewError
} from './store/actions';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import {createAPI} from './services/api';
import browserHistory from './browser-history';
import App from './components/app/app';
import {AuthorizationStatus, OFFLINE_TITLE} from './const';

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
//
// window.addEventListener('online', () => {
//   document.title = document.title.replace(OFFLINE_TITLE, '');
//   store.dispatch(setIsOffline(false));
//   store.dispatch(setDataError(false));
//   store.dispatch(setIsReviewError(false));
//   store.dispatch(setIsFavoritesError(false));
//   store.dispatch(setIsAuthorizationError(false));
// });
//
// window.addEventListener('offline', () => {
//   document.title += OFFLINE_TITLE;
//   store.dispatch(setIsOffline(true));
// });
