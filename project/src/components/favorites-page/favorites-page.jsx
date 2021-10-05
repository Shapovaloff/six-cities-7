import React, {useEffect} from 'react';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {useDispatch, useSelector} from 'react-redux';
import {getFavorites, getIsDataError, getIsDataLoaded} from '../../store/app-data/selectors';
import {getIsOffline} from '../../store/user-data/selectors';
import {fetchFavorites} from '../../store/api-actions';
import {AlertText, AppRoute} from '../../const';
import Alert from '../alert/alert';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {Link} from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favoritesOffers = useSelector(getFavorites);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isDataError = useSelector(getIsDataError);
  const isOffline = useSelector(getIsOffline);
  const uniqueCities = new Set();
  favoritesOffers.forEach((item) => uniqueCities.add(item.city.name));
  const favoritesCities = [...uniqueCities.values()];

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      {isOffline && <Alert text={AlertText.OFFLINE} />}
      {isDataError && <Alert text={AlertText.LOADING} />}
      <LoadWrapper isLoad={isDataLoaded}>
        <main className={`page__main page__main--favorites ${favoritesOffers.length && 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {favoritesOffers.length
              ? (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList
                    favoritesCities={favoritesCities}
                    favoritesOffers={favoritesOffers}
                  />
                </section>
              )
              : <FavoritesEmpty />}
          </div>
        </main>
      </LoadWrapper>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
