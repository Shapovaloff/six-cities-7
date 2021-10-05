import React from 'react';
import reviewsProp from '../app/reviews.prop';
import {getDataString, getRating} from '../../utils';

function ReviewItem(props) {
  const {review} = props;
  const {rating, id, user, date, comment} = review;
  const reviewRating = getRating(rating);
  const reviewDate = getDataString(date);

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user && user.avatarUrl} width="54" height="54" alt={user && user.name} />
        </div>
        <span className="reviews__user-name">
          {user && user.name}
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
}

ReviewItem.propTypes = {
  review: reviewsProp,
};

export default ReviewItem;
