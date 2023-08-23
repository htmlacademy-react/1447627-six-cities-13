import React from 'react';
import {Helmet} from 'react-helmet-async';
import Filter from '../../components/filter';
import Header from '../../components/header';
import Catalog from '../../components/catalog';
import Spinner from '../../components/spinner';
import DataError from '../../components/data-error';
import {CITIES} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';
import {
  getAllOffersDataLoadingStatus,
  getAllOffersLoadingErrorStatus
} from '../../store/catalog/catalog.selectors';
import {fetchAllOffersAction} from '../../store/api-actions';
import useAllOffersData from '../../hooks/use-all-offers-data';

function MainPage(): React.JSX.Element {
  const allOffers = useAllOffersData();
  const isAllOffersDataLoading = useAppSelector(getAllOffersDataLoadingStatus);
  const allOffersHasError = useAppSelector(getAllOffersLoadingErrorStatus);

  let content: React.JSX.Element | '' = '';

  if (isAllOffersDataLoading) {
    content = <div className="page__spinner"><Spinner /></div>;
  } else if (allOffersHasError) {
    content = <DataError action={fetchAllOffersAction}/>;
  } else {
    content = <Catalog offers={allOffers} />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter cities={CITIES} />
        {content}
      </main>
    </div>
  );
}

export default MainPage;
