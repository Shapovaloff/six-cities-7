import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

function UserNoAuth() {
  return (
    <li className="header__nav-item user">
      <NavLink
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.SIGN_IN}
        isActive={(match, { pathname }) =>
          match && pathname === AppRoute.SIGN_IN}
        activeStyle={{
          cursor: 'default',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </NavLink>
    </li>
  );
}

export default UserNoAuth;
