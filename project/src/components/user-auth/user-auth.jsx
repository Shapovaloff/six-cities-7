import React, {Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../store/user-data/selectors';
import {logout} from '../../store/api-actions';

function UserAuth() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const avatarUrl = user && user.avatarUrl;
  const email = user && user.email;

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <li className="header__nav-item user">
        <NavLink
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.FAVORITES}
          isActive={(match, { pathname }) =>
            match && pathname === AppRoute.FAVORITES}
          activeStyle={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img style={{ borderRadius: '50%' }} src={avatarUrl} alt="user" />
          </div>
          <span className="header__user-name user__name">{email}</span>
        </NavLink>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.MAIN}>
          <span className="header__signout" onClick={handleClick}>Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}

export default UserAuth;
