import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import FavoritesItem from '../favorites-item/favorites-item';

function FavoritesList(props) {
  const {favoritesCities, favoritesOffers} = props;

  return (
    <ul className="favorites__list">
      {favoritesCities.map((itemCities) => {
        const keyValueCities = `favorites-cities-${itemCities}`;
        const offers = favoritesOffers.filter((item) => item.city.name === itemCities);

        return (
          <li key={keyValueCities} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{itemCities}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((favoriteOffer, id) => {
                const keyValue = `favorite-offer-${favoriteOffer.id}`;

                return (
                  <FavoritesItem
                    key={keyValue}
                    favoriteOffer={favoriteOffer}
                  />);},
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;
