import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';

function PrivateRoute(props) {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) =>
        authorizationStatus === AuthorizationStatus.AUTH ? (
          render(routerProps)
        ) : (
          <Redirect to={AppRoute.LOGIN} />
        )}
    >
    </Route>
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
