import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import LoadWrapper from '../load-wrapper/load-wrapper';

function PrivateRoute(props) {
  const {render, path, exact, status = AuthorizationStatus.AUTH, redirect = AppRoute.SIGN_IN} = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <LoadWrapper isLoad={authorizationStatus !== AuthorizationStatus.UNKNOWN}>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) =>
          authorizationStatus === status ? (
            render(routeProps)
          ) : (
            <Redirect to={redirect} />
          )}
      />
    </LoadWrapper>
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  status: PropTypes.string,
  redirect: PropTypes.string,
};

export default PrivateRoute;
