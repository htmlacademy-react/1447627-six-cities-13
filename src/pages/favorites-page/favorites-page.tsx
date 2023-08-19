import React from 'react';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Favorites from '../../components/favorites';
import {OfferPreviewsData} from '../../types';

type FavoritesPageProps = {
  offers: OfferPreviewsData;
}

function FavoritesPage({offers}: FavoritesPageProps): React.JSX.Element {
  const isEmpty = !offers.length;

  return(
    <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header />
      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <Favorites offers={offers}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
