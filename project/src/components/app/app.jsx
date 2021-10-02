import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
export const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={MainPage} />
        <Route exact path={AppRoute.LOGIN} component={SignInPage} />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesPage />}
        />
        <Route exact path={AppRoute.ROOM} component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
