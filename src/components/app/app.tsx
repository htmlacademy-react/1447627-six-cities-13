import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import FavoritesPage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import NotFoundPage from '../../pages/not-found';
import OfferPage from '../../pages/offer';
import PrivateRoute from '../private-route';

function App(): React.JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="offer" element={<OfferPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
