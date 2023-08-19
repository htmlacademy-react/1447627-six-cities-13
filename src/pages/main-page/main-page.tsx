import React from 'react';
import {Helmet} from 'react-helmet-async';
import Filter from '../../components/filter';
import Header from '../../components/header';
import Catalog from '../../components/catalog';
import Spinner from '../../components/spinner';
import {CITIES} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';

function MainPage(): React.JSX.Element {
  const allOffers = useAppSelector((state) => state.allOffers);
  const isAllOffersDataLoading = useAppSelector((state) => state.isAllOffersDataLoading);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter cities={CITIES} />
        {isAllOffersDataLoading ? (
          <div className="page__spinner">
            <Spinner />
          </div>
        ) : (
          <Catalog offers={allOffers} />
        )}
      </main>
    </div>
  );
}

export default MainPage;
