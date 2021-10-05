import { NameSpace } from '../root-reducer';

export const getAuthorizationStatus = (state) =>
  state[NameSpace.USER].authorizationStatus;
export const getUser = (state) => state[NameSpace.USER].user;
export const getIsReviewSending = (state) =>
  state[NameSpace.USER].isReviewSending;
export const getIsReviewSuccess = (state) =>
  state[NameSpace.USER].isReviewSuccess;
export const getIsReviewError = (state) => state[NameSpace.USER].isReviewError;
export const getIsFavoritesError = (state) =>
  state[NameSpace.USER].isFavoritesError;
export const getIsAuthorizationError = (state) =>
  state[NameSpace.USER].isAuthorizationError;
export const getIsOffline = (state) => state[NameSpace.USER].isOffline;
