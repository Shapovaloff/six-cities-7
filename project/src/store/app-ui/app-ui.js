import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SORT, Locations } from '../../const';
import {
  changeActiveCard,
  changeActiveCity,
  changeActiveSort
} from '../actions';

const initialState = {
  activeCity: Locations.PARIS,
  activeSort: DEFAULT_SORT,
  activeCard: null,
};

const appUi = createReducer(initialState, {
  [changeActiveCity]: (state, { payload }) => {
    state.activeCity = payload;
  },
  [changeActiveSort]: (state, { payload }) => {
    state.activeSort = payload;
  },
  [changeActiveCard]: (state, { payload }) => {
    state.activeCard = payload;
  },
});

export { appUi };
