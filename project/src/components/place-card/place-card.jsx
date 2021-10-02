import React, {useEffect} from 'react';
import offerProp from '../app/offer.prop';
import PropsTypes from 'prop-types';
import {getRating} from '../../utils';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, ClassesCardType} from '../../const';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

function PlaceCard(props) {
  const {offer, cardType, hoverCard} = props;
  const {price, type, id, is_favorite, title, preview_image, is_premium, rating} = offer;
  const ratingPercent = getRating(rating);
  const widthImg = cardType === ClassesCardType.FAVORITES ? '150' : '260';
  const heightImg = cardType === ClassesCardType.FAVORITES ? '110' : '200';

  useEffect(() => {
    hoverCard(null);
  });

  return (
    <article
      className={cardType === ClassesCardType.MAIN ? `${cardType}__place-card place-card` : `${cardType}__card place-card`}
      onMouseEnter={() => cardType === ClassesCardType.MAIN && hoverCard(id)}
      onMouseLeave={() => cardType === ClassesCardType.MAIN && hoverCard(null)}
    >
      {is_premium && cardType === ClassesCardType.MAIN && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id}), state: id}}>
          <img className="place-card__image" src={preview_image} width={widthImg} height={heightImg} alt={title} />
        </Link>
      </div>
      <div className={`${cardType === ClassesCardType.FAVORITES && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${is_favorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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

PlaceCard.propTypes = {
  offer: offerProp,
  cardType: PropsTypes.string.isRequired,
  hoverCard: PropsTypes.func.isRequired,
};

const mapDispatchToProps = {
  hoverCard: ActionCreator.hoverCard,
};

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
