import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFER: 'data/loadOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavorites',
  SET_DATA_LOAD: 'data/setDataLoad',
  SET_DATA_ERROR: 'data/setDataError',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOAD_USER_INFO: 'user/loadUserInfo',
  LOGOUT: 'user/logout',
  SET_IS_REVIEW_SENDING: 'user/setIsReviewSending',
  SET_IS_REVIEW_SUCCESS: 'user/setIsReviewSuccess',
  SET_IS_REVIEW_ERROR: 'user/setIsReviewError',
  SET_IS_FAVORITES_ERROR: 'user/setIsFavoritesError',
  SET_IS_AUTHORIZATION_ERROR: 'user/setIsAuthorizationError',
  SET_IS_OFFLINE: 'user/setIsOffline',
  SET_FAVORITES: 'ui/setFavorites',
  SET_FAVORITES_ITEM: 'ui/setFavoritesItem',
  CHANGE_ACTIVE_CITY: 'ui/changeActiveCity',
  CHANGE_ACTIVE_SORT: 'ui/changeActiveSort',
  CHANGE_ACTIVE_CARD: 'ui/changeActiveCard',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
};

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({
  payload,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({
  payload,
}));

export const loadOffersNearby = createAction(
  ActionType.LOAD_OFFERS_NEARBY,
  (payload) => ({
    payload,
  }),
);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (payload) => ({
  payload,
}));

export const loadFavorites = createAction(
  ActionType.LOAD_FAVORITES,
  (payload) => ({
    payload,
  }),
);

export const setDataLoad = createAction(
  ActionType.SET_DATA_LOAD,
  (payload) => ({
    payload,
  }),
);

export const setDataError = createAction(
  ActionType.SET_DATA_ERROR,
  (payload) => ({
    payload,
  }),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRE_AUTHORIZATION,
  (payload) => ({
    payload,
  }),
);

export const loadUserInfo = createAction(
  ActionType.LOAD_USER_INFO,
  (payload) => ({
    payload,
  }),
);

export const logout = createAction(ActionType.LOGOUT);

export const setFavoritesItem = createAction(
  ActionType.SET_FAVORITES_ITEM,
  (payload) => ({
    payload,
  }),
);

export const setIsReviewSending = createAction(
  ActionType.SET_IS_REVIEW_SENDING,
  (payload) => ({
    payload,
  }),
);

export const setIsReviewSuccess = createAction(
  ActionType.SET_IS_REVIEW_SUCCESS,
  (payload) => ({
    payload,
  }),
);

export const setIsReviewError = createAction(
  ActionType.SET_IS_REVIEW_ERROR,
  (payload) => ({
    payload,
  }),
);

export const setIsFavoritesError = createAction(
  ActionType.SET_IS_FAVORITES_ERROR,
  (payload) => ({
    payload,
  }),
);

export const setIsAuthorizationError = createAction(
  ActionType.SET_IS_AUTHORIZATION_ERROR,
  (payload) => ({
    payload,
  }),
);

export const setIsOffline = createAction(
  ActionType.SET_IS_OFFLINE,
  (payload) => ({
    payload,
  }),
);

export const changeActiveCity = createAction(
  ActionType.CHANGE_ACTIVE_CITY,
  (payload) => ({
    payload,
  }),
);

export const changeActiveSort = createAction(
  ActionType.CHANGE_ACTIVE_SORT,
  (payload) => ({
    payload,
  }),
);

export const changeActiveCard = createAction(
  ActionType.CHANGE_ACTIVE_CARD,
  (payload) => ({
    payload,
  }),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (payload) => ({
    payload,
  }),
);
