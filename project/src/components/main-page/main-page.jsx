import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../header/header';
import {AlertText, Locations} from '../../const';
import LocationList from '../location-list/location-list';
import MainPageWrapper from '../main-page-wrapper/main-page-wrapper';
import MainEmpty from '../main-empty/main-empty';
import LoadWrapper from '../load-wrapper/load-wrapper';
import {fetchOffers} from '../../store/api-actions';
import {getActiveCity} from '../../store/app-ui/selectors';
import {getIsDataError, getIsDataLoaded, getOffers} from '../../store/app-data/selectors';
import {getIsOffline} from '../../store/user-data/selectors';
import Alert from '../alert/alert';

function MainPage() {
  const city = useSelector(getActiveCity);
  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isDataError = useSelector(getIsDataError);
  const isOffline = useSelector(getIsOffline);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const sortedOffers = offers.filter((item) => item.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      {isOffline && <Alert text={AlertText.OFFLINE} />}
      {isDataError && <Alert text={AlertText.LOADING} />}
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
              ? <MainPageWrapper offers={sortedOffers} city={city} />
              : <MainEmpty />}
          </LoadWrapper>
        </div>
      </main>
    </div>
  );
}

export default memo(MainPage);
