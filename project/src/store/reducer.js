import {DEFAULT_CITY, DEFAULT_SORT} from '../const';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  activeSort: DEFAULT_SORT,
  offers: offers.filter(({ city }) => city.name === DEFAULT_CITY),
  reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: offers.filter(({ city }) => city.name === action.payload),
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    default:
      return state;
  }
};
