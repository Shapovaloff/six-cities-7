import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import UserAuth from '../user-auth/user-auth';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';
import UserNoAuth from '../user-no-auth/user-no-auth';

function Header(props) {
  const {authorizationStatus} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink
              className="header__logo-link"
              to={AppRoute.MAIN}
              isActive={(match, { pathname }) =>
                match && pathname === AppRoute.MAIN}
              activeClassName="header__logo-link--active"
              activeStyle={{
                cursor: 'default',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH
                ? <UserAuth />
                : <UserNoAuth />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps)(Header);
