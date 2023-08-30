import React from 'react';
import {AppRoute} from '../../const';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import Page404 from '../../pages/page-404';
import OfferPage from '../../pages/offer-page';
import PrivateRoute from '../private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import useAppSelector from '../../hooks/use-app-selector';
import {getAuthorizationStatus} from '../../store/user/user.selectors';

function App(): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<Page404 />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
