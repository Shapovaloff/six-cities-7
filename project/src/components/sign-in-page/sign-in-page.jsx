import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {AppRoute, Locations} from '../../const';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {login} from '../../store/api-actions';

function SignInPage(props) {
  const {changeCity, onSubmit} = props;
  const loginRef = useRef(null);
  const [password, setPassword] = useState('');

  const handleChange = (evt) => {
    setPassword(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: password,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header />

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
                  onClick={() => changeCity(Locations.AMSTERDAM)}
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

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: login,
  changeCity: ActionCreator.changeCity,
  redirectToRoute: ActionCreator.redirectToRoute,
};

export default connect(null, mapDispatchToProps)(SignInPage);

