export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT: 'sort/changeSort',
  HOVER_CARD: 'card/hoverCard',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'reviews/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
