export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT: 'sort/changeSort',
  HOVER_CARD: 'card/hoverCard',
  SET_IS_LOAD_OFFERS: 'offers/setIsLoadOffers',
  LOAD_OFFER: 'offers/loadOffer',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_OFFERS_NEARBY: 'offers/loadOffersNearby',
  LOAD_REVIEWS: 'reviews/loadReviews',
  LOAD_USER_INFO: 'user/loadUserInfo',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'route/redirectToRoute',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
  hoverCard: (id) => ({
    type: ActionType.HOVER_CARD,
    payload: id,
  }),
  setIsLoadOffers: (status) => ({
    type: ActionType.SET_IS_LOAD_OFFERS,
    payload: status,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffersNearby: (offersNearby) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersNearby,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadUserInfo: (userInfo) => ({
    type: ActionType.LOAD_USER_INFO,
    payload: userInfo,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route,
  }),
};
