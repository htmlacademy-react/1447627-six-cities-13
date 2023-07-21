import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import FavoritesPage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import Page404 from '../../pages/404';
import OfferPage from '../../pages/offer';
import PrivateRoute from '../private-route';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type PlaceCity = {
  name: string;
  location: Location;
}

type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: PlaceCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

type AppProps = {
  places: Place[];
}

function App({places}: AppProps): React.JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage places={places} />} />
            <Route
              path="favorites"
              element={
                <PrivateRoute>
                  <FavoritesPage places={places} />
                </PrivateRoute>
              }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="offer/:id" element={<OfferPage places={places} />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
