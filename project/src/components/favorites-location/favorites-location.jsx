import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
// import FavoritesItem from '../favorites-item/favorites-item';
import {ClassesCardType} from '../../const';
import PlaceCard from '../place-card/place-card';

function FavoritesLocation(props) {
  const {offersFilter, city} = props;

  return (
    <li key={`cities-${city}`} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#!">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offersFilter.map((offer) => {
          const keyValue = `favorite-offer-${offer.id}`;

          return (<PlaceCard key={keyValue} offer={offer} cardType={ClassesCardType.FAVORITES} />);},
        )}
      </div>
    </li>
  );
}

FavoritesLocation.propTypes = {
  offersFilter: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesLocation;
