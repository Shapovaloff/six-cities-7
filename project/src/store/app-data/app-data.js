import {createReducer} from '@reduxjs/toolkit';
import {REMOVE_FAVORITES_COUNT} from '../../const';

import {
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  setDataError,
  setDataLoad,
  setFavoritesItem
} from '../actions';

const initialState = {
  offer: {},
  offers: [],
  offersNearby: [],
  reviews: [],
  favorites: [],
  isDataLoaded: false,
  isDataError: false,
};

const appData = createReducer(initialState, {
  [loadOffer]: (state, { payload }) => {
    state.offer = payload;
  },
  [loadOffers]: (state, { payload }) => {
    state.offers = payload;
  },
  [loadOffersNearby]: (state, { payload }) => {
    state.offersNearby = payload;
  },
  [loadReviews]: (state, { payload }) => {
    state.reviews = payload;
  },
  [loadFavorites]: (state, { payload }) => {
    state.favorites = payload;
  },
  [setDataLoad]: (state, { payload }) => {
    state.isDataLoaded = payload;
  },
  [setDataError]: (state, { payload }) => {
    state.isDataError = payload;
  },
  [setFavoritesItem]: (
    { offer, offers, offersNearby, favorites },
    { payload },
  ) => {
    if (offer.id === payload.id) {
      offer.isFavorite = payload.isFavorite;
    }

    const index = favorites.findIndex((item) => item.id === payload.id);
    favorites.splice(index, REMOVE_FAVORITES_COUNT);

    if (offersNearby.some((item) => item.id === payload.id)) {
      offersNearby.find((item) => item.id === payload.id).isFavorite =
        payload.isFavorite;
    }

    if (offers.some((item) => item.id === payload.id)) {
      offers.find((item) => item.id === payload.id).isFavorite =
        payload.isFavorite;
    }
  },
});

export { appData };
