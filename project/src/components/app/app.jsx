import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import {AppRoute} from '../../const';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
