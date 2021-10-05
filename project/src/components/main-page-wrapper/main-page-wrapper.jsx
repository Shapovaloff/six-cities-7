import React, {memo} from 'react';
import PropTypes from 'prop-types';
import SortForm from '../sort-form/sort-form';
import CardItem from '../card-item/card-item';
import {ClassesCardType, SORTS} from '../../const';
import Map from '../map/map';
import offerProp from '../app/offer.prop';
import {sortOffers} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getActiveSort} from '../../store/app-ui/selectors';
import {changeActiveCard} from '../../store/actions';

function MainPageWrapper(props) {
  const {offers, city} = props;
  const dispatch = useDispatch();
  const activeSort = useSelector(getActiveSort);
  const sortedOffers = sortOffers(activeSort, offers);

  const clickMouseAction = (id) => {
    dispatch(changeActiveCard(id));
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <SortForm sorts={SORTS} activeSort={activeSort} />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer, id) => (
            <CardItem
              key={`place-card-${id}`}
              offer={offer}
              onMouseEnter={() => clickMouseAction(offer.id)}
              onMouseLeave={() => clickMouseAction(null)}
              cardType={ClassesCardType.MAIN}
            />
          ))}
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
};

export default memo(MainPageWrapper);
