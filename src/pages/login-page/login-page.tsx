import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header';
import {useRef, FormEvent} from 'react';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {loginAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/user.selectors';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const';
import {getRandomArrayItem} from '../../util';
import {setFilterCity} from '../../store/filter/filter.slice';

function LoginPage(): React.JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const city = getRandomArrayItem(CITIES);

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root}/>;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return(
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  data-testid="emailElement"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  pattern="^(?=.*[a-zA-Z])(?=.*[0-9])[0-9a-zA-Z]{2,}$"
                  placeholder="Password"
                  required
                  title="minimum 1 letter and 1 number"
                  data-testid="passwordElement"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => {
                  dispatch(setFilterCity(city));
                }}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
