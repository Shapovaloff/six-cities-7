export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  FILL_OFFERS_LIST: 'offers/fillOffersList',
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
};
