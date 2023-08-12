import React from 'react';
import {AppRoute} from '../../const';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import Page404 from '../../pages/404';
import OfferPage from '../../pages/offer';
import PrivateRoute from '../private-route';
import {Place, Review} from '../../types';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppProps = {
  places: Place[];
  reviews: Review[];
}

function App({places, reviews}: AppProps): React.JSX.Element {
  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage places={places} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage places={places} reviews={reviews}/>}
          />
          <Route
            path={AppRoute.Page404}
            element={<Page404 />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
