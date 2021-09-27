import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import {AppRoute} from '../../const';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import offerProp from './offer.prop';

function App(props) {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage
            offers={offers}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default App;
