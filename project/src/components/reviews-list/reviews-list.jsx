import React from 'react';
import reviewsProp from '../app/reviews.prop';
import PropTypes from 'prop-types';
import {getRating} from '../../utils';

function ReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const {rating, id, user, date, comment} = review;

        const reviewRating = getRating(rating);
        const reviewDate = new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        });

        return (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: reviewRating}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment}</p>
              <time className="reviews__time" dateTime={date}>{reviewDate}</time>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsList;
