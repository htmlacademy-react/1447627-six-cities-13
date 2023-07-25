import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo';
import FavoritesSection from '../../components/favorites-section';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type PlaceCity = {
  name: string;
  location: Location;
}

type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: PlaceCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type FavoritesPageProps = {
  places: Place[];
}

function FavoritesPage({places}: FavoritesPageProps): React.JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo additionalClassName="header__logo"/>
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesSection places={places}/>
        </div>
      </main>
      <footer className="footer container">
        <Logo width={64} height={33}/>
      </footer>
    </div>
  );
}

export default FavoritesPage;
