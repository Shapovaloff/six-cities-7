import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import FavoritesItem from '../favorites-item/favorites-item';

function FavoritesList(props) {
  const {favoritesCities, favoritesOffers} = props;

  return (
    <ul className="favorites__list">
      {favoritesCities.map((item) => (
        <FavoritesItem
          key={item}
          favoritesOffers={favoritesOffers}
          favoritesCity={item}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;
