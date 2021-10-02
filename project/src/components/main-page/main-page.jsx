import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import {LOCATIONS} from '../../const';
import LocationList from '../location-list/location-list';
import {connect} from 'react-redux';
import MainPageWrapper from '../main-page-wrapper/main-page-wrapper';
import MainEmpty from '../main-empty/main-empty';

function MainPage(props) {
  const {offers, city, activeSort} = props;
  const sortedOffers = offers.filter((item) => item.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${!offers.length && 'page__main--index-empty'} page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList location={LOCATIONS} />
          </section>
        </div>
        <div className="cities">
          {offers.length
            ? <MainPageWrapper offers={sortedOffers} city={city} activeSort={activeSort} />
            : <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  activeSort: state.activeSort,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage) ;
