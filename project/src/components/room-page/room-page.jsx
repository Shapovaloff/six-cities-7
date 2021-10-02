import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import reviewsProp from '../app/reviews.prop';
import Header from '../header/header';
import GalleryList from '../gallery-list/gallery-list';
import {useLocation} from 'react-router-dom';
import GoodsList from '../goods-list/goods-list';
import {getRating} from '../../utils';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import PlaceCard from '../place-card/place-card';
import {ClassesCardType} from '../../const';
import {connect} from 'react-redux';
import {fetchOffersList, fetchReviewsList} from '../../store/api-actions';

function RoomPage(props) {
  const {offers, reviews, loadReviewList} = props;
  const location = useLocation();
  const roomId = +location.pathname.replace(/\D+/g, '');

  const offer = offers.find((item) => item.id === roomId);
  const similarOffers = offers.slice(0, 3);
  const {images, goods, is_premium, title, is_favorite, rating, type, bedrooms, max_adults, price, host, description} = offer;
  const cardRating = getRating(rating);

  useEffect(() => {
    loadReviewList(roomId);
  }, [roomId, loadReviewList]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <GalleryList
              images={images}
            />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {is_premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button ${is_favorite && 'property__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: cardRating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <GoodsList goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt={host.name} />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.is_pro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList
                  reviews={reviews}
                />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offers[0].city} offers={offers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {similarOffers.map((similarOffer, id) => {
                const keyValue = `near-places-${id}`;
                return (<PlaceCard key={keyValue} offer={similarOffer} cardType={ClassesCardType.NEARBY} />);
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  loadReviewList: PropTypes.func.isRequired,
  loadOfferList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

const mapDispatchToProps = {
  loadReviewList: fetchReviewsList,
  loadOfferList: fetchOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
