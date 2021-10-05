import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getRating} from '../../utils';
import {ClassesCardType, AuthorizationStatus, AlertText} from '../../const';
import Header from '../header/header';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryList from '../gallery-list/gallery-list';
import GoodsList from '../goods-list/goods-list';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {getIsDataError, getIsDataLoaded, getOffer, getOffersNearby, getReviews} from '../../store/app-data/selectors';
import {fetchOffer, fetchOffersNearby, fetchReviews} from '../../store/api-actions';
import {changeActiveCard} from '../../store/actions';
import Alert from '../alert/alert';
import CardItem from '../card-item/card-item';
import {getAuthorizationStatus, getIsOffline} from '../../store/user-data/selectors';
import FavoritesButton from '../favorites-button/favorites-button';

function RoomPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const offer = useSelector(getOffer);
  const offersNearby = useSelector(getOffersNearby);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isDataError = useSelector(getIsDataError);
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isOffline = useSelector(getIsOffline);

  const sortedReviews = reviews &&
    reviews.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

  const roomId = +params.id;

  const {
    images,
    isFavorite,
    isPremium,
    rating,
    title,
    type,
    description,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = offer;

  const cardRating = getRating(rating);

  useEffect(() => {
    dispatch(changeActiveCard(roomId));
    dispatch(fetchOffer(roomId));
    dispatch(fetchReviews(roomId));
    dispatch(fetchOffersNearby(roomId));
  }, [roomId, dispatch]);

  return (
    <LoadWrapper isLoad={isDataLoaded}>
      {(Object.keys(offer).length ?
        (
          <div className="page">
            <Header />
            {isOffline && <Alert text={AlertText.OFFLINE} />}
            {isDataError && <Alert />}
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
                      <FavoritesButton
                        id={roomId}
                        isFavorite={isFavorite}
                        buttonType={ClassesCardType.FAVORITES}
                      />
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
                          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name} />
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
                      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews && reviews.length}</span></h2>
                      <ReviewsList
                        reviews={sortedReviews}
                      />
                      {authorizationStatus === AuthorizationStatus.AUTH && (
                        <ReviewForm id={roomId} />
                      )}
                    </section>
                  </div>
                </div>
                <section className="property__map map">
                  <Map city={offer.city} offers={[offer, ...offersNearby]} />
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <div className="near-places__list places__list">
                    {offersNearby.map((similarOffer, id) => (
                      <CardItem key={`near-places-${id}`} offer={similarOffer} cardType={ClassesCardType.NEARBY} />
                    ))}
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

export default RoomPage;
