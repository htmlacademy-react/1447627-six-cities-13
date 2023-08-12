import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app';
import {ToastContainer} from 'react-toastify';
import places from './mocks/places';
import reviews from './mocks/reviews';
import {store} from './store';
import {fetchAllPlacesAction, checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchAllPlacesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App places={places} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
