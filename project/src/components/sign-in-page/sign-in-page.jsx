import React, {useRef, useState} from 'react';
import Header from '../header/header';
import {AlertText, AppRoute, Locations} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getIsAuthorizationError, getIsOffline} from '../../store/user-data/selectors';
import {login} from '../../store/api-actions';
import Alert from '../alert/alert';
import {changeActiveCity} from '../../store/actions';

function SignInPage() {
  const isAuthorizationError = useSelector(getIsAuthorizationError);
  const isOffline = useSelector(getIsOffline);
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const loginRef = useRef(null);

  const handleChange = (evt) => {
    setPassword(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(
      login({
        login: loginRef.current.value,
        password: password,
      }),
    );
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      {isOffline && <Alert text={AlertText.OFFLINE} />}
      {isAuthorizationError && <Alert />}
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span
                  onClick={() => dispatch(changeActiveCity(Locations.AMSTERDAM))}
                >
                  Amsterdam
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignInPage;

