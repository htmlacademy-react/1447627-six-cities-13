import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import FavoritesPage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import Page404 from '../../pages/404';
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
          <Route path="offer/:id" element={<OfferPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
