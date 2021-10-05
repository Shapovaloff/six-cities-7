import React, {memo} from 'react';
import offerProp from '../app/offer.prop';
import PropTypes from 'prop-types';
import {getRating} from '../../utils';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, ClassesCardType} from '../../const';
import FavoritesButton from '../favorites-button/favorites-button';

function CardItem(props) {
  const {offer, cardType = ClassesCardType.MAIN, onMouseEnter, onMouseLeave} = props;
  const {id, price, rating, isFavorite, isPremium, title, type, previewImage} = offer;
  const ratingPercent = getRating(rating);
  const widthImg = cardType === ClassesCardType.FAVORITES ? '150' : '260';
  const heightImg = cardType === ClassesCardType.FAVORITES ? '110' : '200';

  return (
    <article
      className={cardType === ClassesCardType.MAIN ? `${cardType}__place-card place-card` : `${cardType}__card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && cardType === ClassesCardType.MAIN && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>
          <img className="place-card__image" src={previewImage} width={widthImg} height={heightImg} alt={title} />
        </Link>
      </div>
      <div className={`${cardType === ClassesCardType.FAVORITES && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton
            id={id}
            isFavorite={isFavorite}
            buttonType={ClassesCardType.MAIN}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercent}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.ROOM, {id}), state: id}}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

CardItem.propTypes = {
  offer: offerProp,
  cardType: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default memo(CardItem);
