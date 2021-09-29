import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        offers={offers}
        reviews={reviews}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
