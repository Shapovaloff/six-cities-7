import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import offerProp from '../app/offer.prop';
import FavoritesLocation from '../favorites-location/favorites-location';
import {connect} from 'react-redux';

function FavoritesPage(props) {
  const {offers} = props;
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueCities = new Set();
  favoritesOffers.forEach((item) => uniqueCities.add(item.city.name));
  const favoritesCities = [...uniqueCities.values()];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCities.map((city) => {
                const offersFilter = favoritesOffers.filter((item) => item.city.name === city);

                return (
                  <FavoritesLocation key={city} offersFilter={offersFilter} city={city} />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {FavoritesPage};
export default connect(mapStateToProps, null)(FavoritesPage);
