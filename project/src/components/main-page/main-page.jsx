import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import Map from '../map/map';
import {ClassesCardType, LOCATIONS} from '../../const';
import LocationList from '../location-list';
import {connect} from 'react-redux';
import MainEmpty from '../main-empty/main-empty';
import SortForm from '../sort-form/sort-form';

function MainPage(props) {
  const {offers, city} = props;

  if (!offers.length) {
    return <MainEmpty locations={LOCATIONS} />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList location={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer, id) => {
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
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage) ;
