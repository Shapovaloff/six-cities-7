import {MAX_PERCENT, MAX_RATING} from './const';

export const getRating = (rating) =>
  `${((rating / MAX_RATING) * MAX_PERCENT).toFixed()}%`;
