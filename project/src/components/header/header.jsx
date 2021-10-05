import React, {memo} from 'react';
import {NavLink} from 'react-router-dom';
import UserAuth from '../user-auth/user-auth';
import {AppRoute, AuthorizationStatus} from '../../const';
import UserNoAuth from '../user-no-auth/user-no-auth';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

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
              {authorizationStatus === AuthorizationStatus.AUTH ? (
                <UserAuth />
              ) : (
                <UserNoAuth />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
