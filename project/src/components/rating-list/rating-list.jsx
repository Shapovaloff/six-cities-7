import React from 'react';
import PropTypes from 'prop-types';

import RatingItem from '../rating-item/rating-item';

const RATINGS = [5, 4, 3, 2, 1];

function RatingList({ handleFieldChange }) {
  return (
    <div
      className="reviews__rating-form form__rating"
      onChange={handleFieldChange}
    >
      {RATINGS.map((item) => (
        <RatingItem key={item} rating={item} />
      ))}
    </div>
  );
}

RatingList.propTypes = {
  handleFieldChange: PropTypes.func.isRequired,
};

export default RatingList;
