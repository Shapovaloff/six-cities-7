import React from 'react';
import PropTypes from 'prop-types';
import SortForm from '../sort-form/sort-form';
import PlaceCard from '../place-card/place-card';
import {ClassesCardType, SORTS} from '../../const';
import Map from '../map/map';
import offerProp from '../app/offer.prop';
import {sortOffers} from '../../utils';

function MainPageWrapper(props) {
  const {offers, city, activeSort} = props;
  const sortedOffers = sortOffers(activeSort, offers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <SortForm sorts={SORTS} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer, id) => {
            const keyValue = `place-card-${id}`;
            return <PlaceCard key={keyValue} offer={offer} cardType={ClassesCardType.MAIN} />;
          })}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={offers[0].city} offers={offers} />
        </section>
      </div>
    </div>
  );
}

MainPageWrapper.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
};

export default MainPageWrapper;
