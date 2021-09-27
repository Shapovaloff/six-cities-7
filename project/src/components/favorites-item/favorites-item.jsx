import React from 'react';
import offerProp from '../app/offer.prop';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function FavoritesItem(props) {
  const {offer} = props;
  const {previewImage, type, isFavorite, price, title, id} = offer;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id}), state: id}}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'}  button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}/>
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

FavoritesItem.propTypes = {
  offer: offerProp,
};

export default FavoritesItem;