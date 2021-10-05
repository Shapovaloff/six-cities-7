import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage} />
      <Route exact path={AppRoute.SIGN_IN} component={SignInPage} />
      <PrivateRoute
        exact
        path={AppRoute.SIGN_IN}
        status={AuthorizationStatus.NO_AUTH}
        redirect={AppRoute.MAIN}
        render={() => <SignInPage />}
      />
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <FavoritesPage />}
      />
      <Route exact path={AppRoute.ROOM} component={RoomPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
