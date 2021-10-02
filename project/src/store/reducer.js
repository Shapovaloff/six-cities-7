import {AuthorizationStatus, Locations, DEFAULT_SORT} from '../const';
import {ActionType} from './action';

const initialState = {
  city: Locations.PARIS,
  activeSort: DEFAULT_SORT,
  activeCard: null,
  offers: [],
  offersNearby: [],
  reviews: [],
  user: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
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
    case ActionType.SET_IS_LOAD_OFFERS:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offers: [action.payload],
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};
