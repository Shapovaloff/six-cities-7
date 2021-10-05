import { NameSpace } from '../root-reducer';

export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getIsDataError = (state) => state[NameSpace.DATA].isDataError;
