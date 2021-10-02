import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getRating} from '../../utils';
import PlaceCard from '../place-card/place-card';
import {ClassesCardType, AuthorizationStatus} from '../../const';
import {fetchOfferNearbyList, fetchReviewsList, fetchOffer} from '../../store/api-actions';
import Header from '../header/header';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryList from '../gallery-list/gallery-list';
import GoodsList from '../goods-list/goods-list';
import NotFoundPage from '../not-found-page/not-found-page';
import offerProp from '../app/offer.prop';
import reviewsProp from '../app/reviews.prop';
import {connect} from 'react-redux';
import LoadWrapper from '../load-wrapper/load-wrapper';


function RoomPage(props) {
  const {
    offers = [],
    offersNearby = [],
    reviews = [],
    loadReviewList,
    loadOffer,
    loadOfferNearbyList,
    authorizationStatus,
    isDataLoaded,
  } = props;

  const location = useLocation();
  const roomId = +location.pathname.replace(/\D+/g, '');
  const {images, goods, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, host, description} = offers.length && offers[0];
  const cardRating = getRating(rating);

  useEffect(() => {
    loadOffer(roomId);
    loadReviewList(roomId);
    loadOfferNearbyList(roomId);
  }, [roomId, loadOffer, loadReviewList, loadOfferNearbyList]);

  return (
    <LoadWrapper isLoad={isDataLoaded}>
      {(offers.length ?
        (
          <div className="page">
            <Header />
            <main className="page__main page__main--property">
              <section className="property">
                <div className="property__gallery-container container">
                  <GalleryList images={images} />
                </div>
                <div className="property__container container">
                  <div className="property__wrapper">
                    {isPremium && (
                      <div className="property__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="property__name-wrapper">
                      <h1 className="property__name">{title}</h1>
                      <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button">
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
                        Max {maxAdults} adults
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
                        <span className="property__user-name">{host.name}</span>
                        {host.isPro && (
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
                      {authorizationStatus === AuthorizationStatus.AUTH && (
                        <ReviewForm id={roomId} />
                      )}
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
                    {offersNearby.map((similarOffer, id) => {
                      const keyValue = `near-places-${id}`;
                      return (<PlaceCard key={keyValue} offer={similarOffer} cardType={ClassesCardType.NEARBY} />);
                    })}
                  </div>
                </section>
              </div>
            </main>
          </div>
        )
        : (
          <NotFoundPage />
        )
      )}
    </LoadWrapper>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  loadReviewList: PropTypes.func.isRequired,

  loadOffer: PropTypes.func.isRequired,
  loadOfferNearbyList: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  offersNearby: state.offersNearby,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = {
  loadReviewList: fetchReviewsList,
  loadOfferNearbyList: fetchOfferNearbyList,
  loadOffer: fetchOffer,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
