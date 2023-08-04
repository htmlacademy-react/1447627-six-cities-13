import {createAction} from '@reduxjs/toolkit';

export const setFilterCity = createAction('filter/setCity', (city: string) => ({
  payload: city
}));

export const getPlaces = createAction('data/getPlaces');
