import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Filter from '../../components/filter';
import Logo from '../../components/logo';
import Catalog from '../../components/catalog';
import Spinner from '../../components/spinner';
import {CITIES} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';

function MainPage(): React.JSX.Element {
  const places = useAppSelector((state) => state.places);
  const isPlacesDataLoading = useAppSelector((state) => state.isPlacesDataLoading);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo additionalClassName="header__logo" disabled/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {isPlacesDataLoading ? (
          <div className="page__spinner">
            <Spinner />
          </div>
        ) : (
          <>
            <Filter cities={CITIES} />
            <Catalog allPlaces={places} />
          </>
        )}
      </main>
    </div>
  );
}

export default MainPage;
