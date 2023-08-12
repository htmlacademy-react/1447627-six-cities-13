import React from 'react';
import {Helmet} from 'react-helmet-async';
import Filter from '../../components/filter';
import Header from '../../components/header';
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
      <Header />
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
