import React from 'react';
import reviewsProp from '../app/reviews.prop';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp),
};

export default ReviewsList;
