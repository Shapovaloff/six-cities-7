import {DEFAULT_CITY, DEFAULT_SORT} from '../const';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  activeSort: DEFAULT_SORT,
  activeCard: null,
  offers: offers.filter(({ city }) => city.name === DEFAULT_CITY),
  reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: offers.filter(({city}) => city.name === action.payload),
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    case ActionType.HOVER_CARD:
      return {
        ...state,
        activeCard: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};
