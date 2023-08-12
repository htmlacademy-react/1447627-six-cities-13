import React from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer';
import Header from '../../components/header';
import FavoritesSection from '../../components/favorites-section';
import {Place} from '../../types';

type FavoritesPageProps = {
  places: Place[];
}

function FavoritesPage({places}: FavoritesPageProps): React.JSX.Element {
  const isEmpty = !places.length;

  return(
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <FavoritesSection places={places}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
