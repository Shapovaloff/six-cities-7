import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardItem from '../card-item/card-item';
import {AppRoute, ClassesCardType} from '../../const';
import {changeActiveCity} from '../../store/actions';
import offersProp from '../app/offer.prop';

function FavoritesItem({ favoritesOffers, favoritesCity }) {
  const dispatch = useDispatch();

  const offers = favoritesOffers.filter(
    (item) => item.city.name === favoritesCity,
  );

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.MAIN}
            onClick={() => {
              dispatch(changeActiveCity(favoritesCity));
            }}
          >
            <span>{favoritesCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => (
          <CardItem key={item.id} offer={item} itemType={ClassesCardType.FAVORITES} />
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offersProp).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesItem;
