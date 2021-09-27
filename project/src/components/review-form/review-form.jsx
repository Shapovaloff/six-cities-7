import React, { useState } from 'react';
import RatingList from '../rating-list/rating-list';

const MIN_SYMBOL_COUNT = 50;

function ReviewForm() {
  const [review, setReview] = useState({
    rating: '',
    review: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setReview((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingList handleFieldChange={handleFieldChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
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
          disabled={review.review.length < MIN_SYMBOL_COUNT && true}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
