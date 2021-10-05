import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import RatingList from '../rating-list/rating-list';
import Alert from '../alert/alert';
import {sendReview} from '../../store/api-actions';
import {getIsReviewError, getIsReviewSending, getIsReviewSuccess} from '../../store/user-data/selectors';
const MIN_SYMBOL_COUNT = 50;

function ReviewForm(props) {
  const dispatch = useDispatch();
  const isReviewSending = useSelector(getIsReviewSending);
  const isReviewSuccess = useSelector(getIsReviewSuccess);
  const isReviewError = useSelector(getIsReviewError);
  const {id} = props;

  const [review, setReview] = useState({
    rating: '',
    review: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendReview({ comment: review.review, rating: review.rating, id }));
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setReview((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (isReviewSuccess) {
      setReview((state) => ({
        ...state,
        rating: '',
        review: '',
      }));
    }
  }, [isReviewSuccess]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {isReviewError && <Alert />}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList handleChange={handleChange} checked={+review.rating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        value={review.review}
        disabled={isReviewSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            isReviewSending ||
            !(review.review.length >= MIN_SYMBOL_COUNT && review.rating)
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ReviewForm;
