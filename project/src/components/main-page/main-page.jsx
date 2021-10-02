import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import {Locations} from '../../const';
import LocationList from '../location-list/location-list';
import {connect} from 'react-redux';
import MainPageWrapper from '../main-page-wrapper/main-page-wrapper';
import MainEmpty from '../main-empty/main-empty';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {fetchOffersList} from '../../store/api-actions';

function MainPage(props) {
  const {offers, city, activeSort, loadOffers, isDataLoaded} = props;
  useEffect(() => {
    loadOffers();
  }, [loadOffers]);

  const sortedOffers = offers.filter((item) => item.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${!offers.length && 'page__main--index-empty'} page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList location={Object.values(Locations)} />
          </section>
        </div>
        <div className="cities">
          <LoadWrapper isLoad={isDataLoaded}>
            {sortedOffers.length
              ? <MainPageWrapper offers={sortedOffers} city={city} activeSort={activeSort} />
              : <MainEmpty />}
          </LoadWrapper>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.string.isRequired,
  loadOffers: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  activeSort: state.activeSort,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = {
  loadOffers: fetchOffersList,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage) ;
