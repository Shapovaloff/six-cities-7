import { adaptOffer, adaptReview, adaptUserInfo } from '../adapters';
import { APIRoute, AppRoute, AuthorizationStatus, TOKEN } from '../const';
import {
  loadFavorites,
  loadOffer,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  setDataLoad,
  redirectToRoute,
  requireAuthorization,
  loadUserInfo,
  logout as closeSession,
  setIsReviewError,
  setIsReviewSending,
  setIsReviewSuccess,
  setFavoritesItem,
  setIsFavoritesError,
  setIsAuthorizationError,
  setDataError
} from './actions';
import { NameSpace } from './root-reducer';

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setDataLoad(false));
  dispatch(setDataError(false));
  return api
    .get(`${APIRoute.OFFERS}/${id}`)
    .then(({ data }) => dispatch(loadOffer(adaptOffer(data))))
    .then(() => dispatch(setDataLoad(true)))
    .catch(() => {
      dispatch(setDataLoad(true));
      dispatch(setDataError(true));
    });
};

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(setDataLoad(false));
  dispatch(setDataError(false));
  return api
    .get(APIRoute.OFFERS)
    .then(({ data }) => dispatch(loadOffers(data.map(adaptOffer))))
    .then(() => dispatch(setDataLoad(true)))
    .catch(() => {
      dispatch(setDataLoad(true));
      dispatch(setDataError(true));
    });
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({ data }) => dispatch(loadOffersNearby(data.map(adaptOffer))));

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.REVIEWS}/${id}`)
    .then(({ data }) => dispatch(loadReviews(data.map(adaptReview))));

export const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(setDataLoad(false));
  dispatch(setDataError(false));
  return api
    .get(APIRoute.FAVORITES)
    .then(({ data }) => dispatch(loadFavorites(data.map(adaptOffer))))
    .then(() => dispatch(setDataLoad(true)))
    .catch(() => {
      dispatch(setDataLoad(true));
      dispatch(setDataError(true));
    });
};

export const checkAuth = () => (dispatch, _getState, api) =>
  api.get(APIRoute.LOGIN).then(({ data }) => {
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(loadUserInfo(adaptUserInfo(data)));
  });

export const login =
  ({ login: email, password }) =>
    (dispatch, _getState, api) => {
      dispatch(setIsAuthorizationError(false));
      return api
        .post(APIRoute.LOGIN, { email, password })
        .then(({ data }) => {
          localStorage.setItem(TOKEN, data.token);
          return dispatch(loadUserInfo(adaptUserInfo(data)));
        })
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
        .catch(() => dispatch(setIsAuthorizationError(true)));
    };

export const logout = () => (dispatch, _getState, api) =>
  api
    .delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem(TOKEN))
    .then(() => dispatch(closeSession()));

export const sendReview =
  ({ comment, rating, id }) =>
    (dispatch, _getState, api) => {
      dispatch(setIsReviewSending(true));
      dispatch(setIsReviewSuccess(false));
      dispatch(setIsReviewError(false));
      return api
        .post(`${APIRoute.REVIEWS}/${id}`, {
          comment,
          rating,
        })
        .then(({ data }) => {
          dispatch(setIsReviewSending(false));
          dispatch(setIsReviewSuccess(true));
          dispatch(setIsReviewError(false));
          dispatch(loadReviews(data.map(adaptReview)));
        })
        .catch(() => {
          dispatch(setIsReviewSending(false));
          dispatch(setIsReviewSuccess(false));
          dispatch(setIsReviewError(true));
        });
    };

export const setFavorites =
  ({ id, status }) =>
    (dispatch, getState, api) => {
      const authStatus = getState()[NameSpace.USER].authorizationStatus;

      if (authStatus !== AuthorizationStatus.AUTH) {
        dispatch(redirectToRoute(AppRoute.SIGN_IN));
      } else {
        dispatch(setIsFavoritesError(false));
        api
          .post(`${APIRoute.FAVORITES}/${id}/${status}`)
          .then(({ data }) => {
            dispatch(setFavoritesItem(adaptOffer(data)));
          })
          .catch(() => dispatch(setIsFavoritesError(true)));
      }
    };
