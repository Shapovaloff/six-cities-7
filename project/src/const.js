export const MAX_RATING = 5;
export const MAX_PERCENT = 100;
export const DEFAULT_SORT = 'Popular';

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const ClassesCardType = {
  MAIN: 'cities',
  FAVORITES: 'favorites',
  NEARBY: 'near-places',
};

export const Locations = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SortOptions = {
  PRICE_LOW_FIRST: 'Price: low to high',
  PRICE_HIGH_FIRST: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS_NEARBY: '/nearby',
};
