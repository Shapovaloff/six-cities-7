export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  FILL_OFFERS_LIST: 'offers/fillOffersList',
  CHANGE_SORT: 'sort/changeSort',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffersList: (city) => ({
    type: ActionType.FILL_OFFERS_LIST,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
};
