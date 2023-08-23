import React from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Favorites from '../../components/favorites';
import useAppSelector from '../../hooks/use-app-selector';
import {getFavoriteOffers} from '../../store/favorite-offers/favorite-offers.selectors';

function FavoritesPage(): React.JSX.Element {
  const favoritesOffers = useAppSelector(getFavoriteOffers);

  const isEmpty = !favoritesOffers.length;

  return(
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <Favorites offers={favoritesOffers}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
