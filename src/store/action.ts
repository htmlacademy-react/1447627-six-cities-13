import {createAction} from '@reduxjs/toolkit';
import {Places} from '../types';

export const setFilterCity = createAction('filter/setCity', (city: string) => ({
  payload: city
}));

export const loadAllPlaces = createAction<Places>('data/loadAllPlaces');

export const setPlacesDataLoadingStatus = createAction<boolean>('data/setPlacesDataLoadingStatus');
