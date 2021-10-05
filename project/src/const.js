export const MAX_RATING = 5;
export const MAX_PERCENT = 100;
export const DEFAULT_SORT = 'Popular';
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const Locations = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const SortOptions = {
  PRICE_LOW_FIRST: 'Price: low to high',
  PRICE_HIGH_FIRST: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  OFFERS_NEARBY: '/nearby',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorite',
};

export const AlertText = {
  DEFAULT: 'Something went wrong. Please try again later!',
  OFFLINE: 'Connection lost',
  LOADING: 'Loading failure. Please try again later.',
};

export const ClassesCardType = {
  MAIN: 'cities',
  FAVORITES: 'favorites',
  NEARBY: 'near-places',
};

export const TOKEN = 'token';
export const IS_FAVORITES = 1;
export const IS_NOT_FAVORITES = 0;

export const DEFAULT_TIMER = 5000;

export const RATINGS = [5, 4, 3, 2, 1];

export const DateConfig = {
  LOCALES: 'en-US',
  YEAR: 'numeric',
  MONTH: 'short',
};

export const MapConfig = {
  TILE_LAYER:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const REMOVE_FAVORITES_COUNT = 1;

export const OFFLINE_TITLE = ' [offline]';




